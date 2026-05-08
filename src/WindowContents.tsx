import { useState } from 'react';
import { translations, type LanguageCode } from './locales';
import { about, projects, projectCategoryLabels, contact, cv, type Project } from './data';

interface WindowContentProps {
  id: string;
  language: LanguageCode;
  onOpenProject?: (slug: string) => void;
}

/** Tüm projeleri (her iki kategoriden) slug ile bulur */
function findProjectBySlug(slug: string, language: LanguageCode): Project | undefined {
  const cats = projects[language];
  const all = [...cats.vibeCoding, ...cats.selfBuilt];
  return all.find(p => p.slug === slug);
}

/** XP tarzı görsel galerisi bileşeni */
function ProjectGallery({ images, language }: { images: string[]; language: LanguageCode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = translations[language];

  const prev = () => setCurrentIndex(i => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrentIndex(i => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="project-gallery">
      <div className="project-gallery-viewport">
        <img
          src={images[currentIndex]}
          alt={`${t.imageCounter} ${currentIndex + 1}`}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
      <div className="project-gallery-nav">
        <button onClick={prev} disabled={images.length <= 1}>{t.prevImage}</button>
        <span style={{ fontSize: '11px', color: '#444' }}>
          {t.imageCounter} {currentIndex + 1} / {images.length}
        </span>
        <button onClick={next} disabled={images.length <= 1}>{t.nextImage}</button>
      </div>
    </div>
  );
}

/** Proje detay penceresi içeriği */
function ProjectDetailContent({ slug, language }: { slug: string; language: LanguageCode }) {
  const t = translations[language];
  const project = findProjectBySlug(slug, language);

  if (!project) return <p>{t.noDetails}</p>;

  const hasDetails = project.longDescription || project.images?.length || project.techStack?.length;

  return (
    <div className="project-detail">
      {/* Proje başlığı ve kısa açıklama */}
      <div style={{ marginBottom: '12px' }}>
        <h3 style={{ margin: '0 0 4px', fontSize: '14px' }}>{project.name}</h3>
        <p style={{ margin: 0, fontSize: '11px', color: '#666' }}>{project.description}</p>
      </div>

      {!hasDetails ? (
        /* Henüz detay eklenmemiş */
        <fieldset>
          <legend>{t.projectInfo}</legend>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px 5px' }}>
            <img src="/icons/msg_information-0.png" alt="info" style={{ width: 32, height: 32, flexShrink: 0 }} />
            <p style={{ margin: 0, fontSize: '12px', color: '#555' }}>{t.noDetails}</p>
          </div>
        </fieldset>
      ) : (
        <>
          {/* Görsel galerisi */}
          {project.images && project.images.length > 0 && (
            <ProjectGallery images={project.images} language={language} />
          )}

          {/* Detaylı açıklama */}
          {project.longDescription && (
            <fieldset style={{ marginBottom: '10px' }}>
              <legend>{t.projectInfo}</legend>
              <p style={{ margin: '5px 0', fontSize: '12px', lineHeight: '1.5' }}>
                {project.longDescription}
              </p>
            </fieldset>
          )}

          {/* Teknolojiler */}
          {project.techStack && project.techStack.length > 0 && (
            <fieldset style={{ marginBottom: '10px' }}>
              <legend>{t.technologies}</legend>
              <div className="project-tech-list">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="project-tech-badge">{tech}</span>
                ))}
              </div>
            </fieldset>
          )}

          {/* Linkler */}
          {(project.liveUrl || project.repoUrl) && (
            <div className="project-links">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <button style={{ cursor: 'pointer' }}>🌐 {t.liveDemo}</button>
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <button style={{ cursor: 'pointer' }}>📂 {t.sourceCode}</button>
                </a>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export function WindowContentRenderer({ id, language, onOpenProject }: WindowContentProps) {
  const t = translations[language];

  // Proje detay penceresi: id 'project-{slug}' formatında
  if (id.startsWith('project-')) {
    const slug = id.replace('project-', '');
    return <ProjectDetailContent slug={slug} language={language} />;
  }

  switch (id) {
    case 'about':
      return (
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
          <div style={{ width: '130px', flexShrink: 0, textAlign: 'center' }}>
            <div style={{ width: '130px', height: '160px', border: '2px solid', borderColor: '#848584 #fff #fff #848584', padding: '2px', backgroundColor: '#fff' }}>
              <img src={about.profileImage} alt="Profil" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <p style={{ marginTop: '8px', fontWeight: 'bold', fontSize: '13px', lineHeight: '1.3' }}>{about.name}</p>
            <p style={{ marginTop: '2px', fontSize: '11px', color: '#444', lineHeight: '1.3' }}>{about.title[language]}</p>
          </div>
          <div>
            <h3 style={{ marginTop: 0, fontSize: '14px', borderBottom: '1px solid #848584', paddingBottom: '5px' }}>{t.aboutTitle}</h3>
            {about.bio[language].map((paragraph, i) => (
              <p key={i} style={{ marginBottom: '10px', marginTop: i === 0 ? '10px' : '0' }}>{paragraph}</p>
            ))}
          </div>
        </div>
      );

    case 'projects': {
      const cats = projects[language];
      const labels = projectCategoryLabels[language];
      const renderList = (items: typeof cats.vibeCoding) => (
        <ul style={{ padding: '0 10px 10px', listStyleType: 'none', marginLeft: '10px' }}>
          {items.map((project, i) => (
            <li key={i} style={{ marginBottom: '5px' }}>
              {project.url ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <strong>{project.name}</strong> - {project.description}
                </a>
              ) : (
                <span
                  className="project-list-item"
                  onClick={(e) => { e.stopPropagation(); onOpenProject?.(project.slug); }}
                  style={{ cursor: 'pointer' }}
                >
                  📁 <strong>{project.name}</strong> - <span style={{ color: '#555' }}>{project.description}</span>
                </span>
              )}
            </li>
          ))}
        </ul>
      );
      return (
        <div style={{ width: '100%', maxHeight: '250px', overflowY: 'auto' }}>
          <h4 style={{ margin: '10px 10px 5px', fontSize: '13px', borderBottom: '1px solid #848584', paddingBottom: '4px' }}>{labels.vibeCoding}</h4>
          {renderList(cats.vibeCoding)}
          <h4 style={{ margin: '10px 10px 5px', fontSize: '13px', borderBottom: '1px solid #848584', paddingBottom: '4px' }}>{labels.selfBuilt}</h4>
          {renderList(cats.selfBuilt)}
        </div>
      );
    }

    case 'contact':
      return (
        <fieldset>
          <legend>{t.contactDetails}</legend>
          {contact[language].map((field, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
              <label style={{ minWidth: '65px', flexShrink: 0, fontSize: '12px' }}>{field.label}</label>
              {field.url ? (
                <a href={field.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', flex: 1, minWidth: 0 }}>
                  <input type="text" value={field.value} readOnly style={{ width: '100%', cursor: 'pointer', color: '#0000EE', boxSizing: 'border-box' }} />
                </a>
              ) : (
                <input type="text" value={field.value} readOnly style={{ width: '100%', boxSizing: 'border-box' }} />
              )}
            </div>
          ))}
        </fieldset>
      );

    case 'cv':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px 0' }}>
          <img src="/icons/briefcase-0.png" alt="CV" style={{ width: '64px', height: '64px', marginBottom: '20px' }} />
          <h3 style={{ marginBottom: '10px', fontSize: '14px' }}>{cv.fullName} - CV.pdf</h3>
          <p style={{ marginBottom: '20px', textAlign: 'center', color: '#333' }}>{t.cvText}</p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href={cv.filePath} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button style={{ padding: '5px 15px', cursor: 'pointer' }}>{t.view}</button>
            </a>
            <button
              style={{ padding: '5px 15px', fontWeight: 'bold', cursor: 'pointer' }}
              onClick={() => {
                fetch(cv.filePath)
                  .then(res => res.blob())
                  .then(blob => {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = cv.downloadFileName;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                  });
              }}
            >{t.download}</button>
          </div>
        </div>
      );

    default:
      return null;
  }
}
