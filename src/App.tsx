import { useState, useRef, createRef } from 'react';
import Draggable from 'react-draggable';
import { translations } from './locales';
import { WindowContentRenderer } from './WindowContents';
import './xp.css';
import './App.css';

interface WindowData {
  id: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  x: number;
  y: number;
  iconX: number;
  iconY: number;
  icon: string;
}

function App() {
  const [language, setLanguage] = useState<'tr' | 'en'>('tr');
  const [isLangModalOpen, setIsLangModalOpen] = useState(true);

  const [windows, setWindows] = useState<WindowData[]>([
    {
      id: 'about',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      x: 100,
      y: 50,
      iconX: 20,
      iconY: 20,
      icon: '/icons/user_computer-0.png',
    },
    {
      id: 'projects',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      x: 150,
      y: 100,
      iconX: 20,
      iconY: 110,
      icon: '/icons/directory_open_file_mydocs-4.png',
    },
    {
      id: 'contact',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      x: 200,
      y: 150,
      iconX: 20,
      iconY: 200,
      icon: '/icons/network_internet_pcs_installer-2.png',
    },
    {
      id: 'cv',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      x: 250,
      y: 100,
      iconX: 20,
      iconY: 290,
      icon: '/icons/briefcase-0.png',
    }
  ]);

  const [activeWindow, setActiveWindow] = useState<string>('');
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  // Refs for Draggable Windows and Icons
  const windowRefs = useRef<Record<string, React.RefObject<HTMLDivElement | null>>>({});
  const iconRefs = useRef<Record<string, React.RefObject<HTMLDivElement | null>>>({});

  windows.forEach(w => {
    if (!windowRefs.current[w.id]) windowRefs.current[w.id] = createRef<HTMLDivElement>();
    if (!iconRefs.current[w.id]) iconRefs.current[w.id] = createRef<HTMLDivElement>();
  });

  const t = translations[language];

  const getWindowTitle = (id: string): string => {
    const titleMap: Record<string, string> = {
      about: t.aboutTitle,
      projects: t.projectsTitle,
      contact: t.contactTitle,
      cv: t.cvTitle
    };
    return titleMap[id] || id;
  };

  const toggleWindow = (id: string) => {
    setWindows(windows.map(w => w.id === id ? { ...w, isOpen: true, isMinimized: false } : w));
    setActiveWindow(id);
    setIsStartMenuOpen(false);
  };

  const closeWindow = (id: string) => setWindows(windows.map(w => w.id === id ? { ...w, isOpen: false } : w));
  const minimizeWindow = (id: string) => setWindows(windows.map(w => w.id === id ? { ...w, isMinimized: true } : w));

  const restoreWindow = (id: string) => {
    setWindows(windows.map(w => w.id === id ? { ...w, isMinimized: false } : w));
    setActiveWindow(id);
  };

  const maximizeWindow = (id: string) => {
    setWindows(windows.map(w => w.id === id ? { ...w, isMaximized: !w.isMaximized } : w));
    setActiveWindow(id);
  };

  const handleWindowClick = (id: string) => {
    setActiveWindow(id);
    setIsStartMenuOpen(false);
  };

  const handleLangSubmit = () => {
    setIsLangModalOpen(false);
  };

  return (
    <div className="desktop" onClick={() => setIsStartMenuOpen(false)}>

      {/* Language Selection Modal */}
      {isLangModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="window" style={{ width: '320px' }}>
            <div className="title-bar">
              <div className="title-bar-text">{t.sysPrefs}</div>
            </div>
            <div className="window-body">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <img src="/icons/msg_information-0.png" alt="info" style={{ marginRight: '15px', width: 32, height: 32 }} />
                <p style={{ fontSize: '13px' }}>Please select your language.<br />Lütfen dil seçiminizi yapın.</p>
              </div>

              <fieldset style={{ marginBottom: '20px' }}>
                <legend>Language / Dil</legend>
                <div className="field-row" style={{ marginBottom: '10px' }}>
                  <input id="lang_tr" type="radio" name="language" value="tr" checked={language === 'tr'} onChange={() => setLanguage('tr')} />
                  <label htmlFor="lang_tr" style={{ fontSize: '13px' }}>{t.langTr}</label>
                </div>
                <div className="field-row">
                  <input id="lang_en" type="radio" name="language" value="en" checked={language === 'en'} onChange={() => setLanguage('en')} />
                  <label htmlFor="lang_en" style={{ fontSize: '13px' }}>{t.langEn}</label>
                </div>
              </fieldset>

              <section className="field-row" style={{ justifyContent: 'center' }}>
                <button onClick={handleLangSubmit} style={{ width: '100px', fontWeight: 'bold' }}>OK</button>
              </section>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Icons */}
      <div className="desktop-icons">
        {windows.map(w => {
          const iconRef = iconRefs.current[w.id];
          const title = getWindowTitle(w.id);
          return (
            <Draggable
              key={`draggable-icon-${w.id}`}
              bounds="parent"
              nodeRef={iconRef as React.RefObject<HTMLDivElement>}
              position={{ x: w.iconX, y: w.iconY }}
              onStop={(_e: unknown, data: { x: number; y: number }) => {
                let newX = Math.round(data.x / 90) * 90 + 20;
                let newY = Math.round(data.y / 90) * 90 + 20;

                if (newX < 20) newX = 20;
                if (newY < 20) newY = 20;

                const isOverlapping = windows.some(other => {
                  if (other.id === w.id) return false;
                  return Math.abs(other.iconX - newX) < 10 && Math.abs(other.iconY - newY) < 10;
                });

                if (isOverlapping) {
                  newX = w.iconX;
                  newY = w.iconY;
                }

                setWindows(windows.map(win => win.id === w.id ? { ...win, iconX: newX, iconY: newY } : win));
              }}
            >
              <div
                ref={iconRef as React.RefObject<HTMLDivElement>}
                className="icon"
                onDoubleClick={() => toggleWindow(w.id)}
                style={{ pointerEvents: 'auto' }}
              >
                <img src={w.icon} alt={title} />
                <span>{title}</span>
              </div>
            </Draggable>
          );
        })}
      </div>

      {/* Windows */}
      {windows.map((w) => {
        const nodeRef = windowRefs.current[w.id];
        const isMax = w.isMaximized;
        const title = getWindowTitle(w.id);
        return w.isOpen && !w.isMinimized && (
          <Draggable
            key={w.id}
            handle=".title-bar"
            defaultPosition={{ x: w.x, y: w.y }}
            disabled={isMax}
            onMouseDown={() => handleWindowClick(w.id)}
            nodeRef={nodeRef as React.RefObject<HTMLDivElement>}
          >
            <div
              ref={nodeRef as React.RefObject<HTMLDivElement>}
              className={`window ${isMax ? 'maximized' : ''}`}
              style={{
                position: 'absolute',
                width: isMax ? '100vw' : (w.id === 'contact' || w.id === 'about') ? '420px' : '350px',
                height: isMax ? 'calc(100vh - 30px)' : 'auto',
                zIndex: activeWindow === w.id ? 100 : 10,
              }}
              onClick={(e) => { e.stopPropagation(); handleWindowClick(w.id); }}
            >
              <div
                className={`title-bar ${activeWindow !== w.id ? 'inactive' : ''}`}
                onDoubleClick={(e) => { e.stopPropagation(); maximizeWindow(w.id); }}
              >
                <div className="title-bar-text">
                  <img src={w.icon} style={{ width: 14, height: 14, marginRight: 5, verticalAlign: 'middle' }} alt="" />
                  {title}
                </div>
                <div className="title-bar-controls">
                  <button aria-label="Minimize" onClick={(e) => { e.stopPropagation(); minimizeWindow(w.id); }}></button>
                  <button aria-label={isMax ? "Restore" : "Maximize"} onClick={(e) => { e.stopPropagation(); maximizeWindow(w.id); }}></button>
                  <button aria-label="Close" onClick={(e) => { e.stopPropagation(); closeWindow(w.id); }}></button>
                </div>
              </div>
              <div className="window-body">
                <WindowContentRenderer id={w.id} language={language} />
                <section className="field-row" style={{ justifyContent: 'flex-end', marginTop: '15px' }}>
                  <button onClick={() => closeWindow(w.id)}>{t.close}</button>
                </section>
              </div>
            </div>
          </Draggable>
        );
      })}

      {/* Taskbar */}
      <div className="taskbar" onClick={(e) => e.stopPropagation()}>
        <button
          className={`start-button ${isStartMenuOpen ? 'active' : ''}`}
          onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
        >
          <img src="/icons/windows-0.png" alt="start" style={{ width: 16, height: 16, marginRight: 5 }} />
          <span>{t.start}</span>
        </button>

        {isStartMenuOpen && (
          <div className="start-menu">
            <div className="start-menu-sidebar">
              <div className="start-menu-title">Portföy OS</div>
            </div>
            <div className="start-menu-items">
              {windows.map(w => (
                <div key={`start-${w.id}`} className="start-menu-item" onClick={() => toggleWindow(w.id)}>
                  <img src={w.icon} alt="" />
                  <span>{getWindowTitle(w.id)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="taskbar-windows">
          {windows.filter(w => w.isOpen).map(w => (
            <div
              key={`taskbar-${w.id}`}
              className={`taskbar-item ${activeWindow === w.id && !w.isMinimized ? 'active' : ''}`}
              onClick={() => {
                if (activeWindow === w.id && !w.isMinimized) {
                  minimizeWindow(w.id);
                } else {
                  restoreWindow(w.id);
                }
              }}
            >
              <img src={w.icon} alt="" style={{ width: 14, height: 14, marginRight: 5 }} />
              <span>{getWindowTitle(w.id)}</span>
            </div>
          ))}
        </div>

        <div className="system-tray">
          <span>{new Date().toLocaleTimeString(language === 'tr' ? 'tr-TR' : 'en-US', { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
