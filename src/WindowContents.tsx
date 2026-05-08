import { translations, type LanguageCode } from './locales';
import { about, projects, projectCategoryLabels, contact, cv } from './data';

interface WindowContentProps {
  id: string;
  language: LanguageCode;
}

export function WindowContentRenderer({ id, language }: WindowContentProps) {
  const t = translations[language];

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
        <ul style={{ padding: '0 10px 10px', listStyleType: 'disc', marginLeft: '20px' }}>
          {items.map((project, i) => (
            <li key={i} style={{ marginBottom: '5px' }}>
              {project.url ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <strong>{project.name}</strong> - {project.description}
                </a>
              ) : (
                <><strong>{project.name}</strong> - {project.description}</>
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
            <a href={cv.filePath} download={cv.downloadFileName} style={{ textDecoration: 'none' }}>
              <button style={{ padding: '5px 15px', fontWeight: 'bold', cursor: 'pointer' }}>{t.download}</button>
            </a>
          </div>
        </div>
      );

    default:
      return null;
  }
}
