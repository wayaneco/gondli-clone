import React from 'react';
import { Modal } from 'react-bootstrap';
import './LanguageModal.scss'; // CSS for custom styles

interface LanguageModalProps {
  show: boolean;
  onClose: () => void;
  selectedLanguage: string;
  handleLanguageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LanguageModal: React.FC<LanguageModalProps> = ({
  show,
  onClose,
  selectedLanguage,
  handleLanguageChange,
}) => {
  return (
    <Modal show={show} onHide={onClose} centered className="language-modal">
      <Modal.Header closeButton>
        <Modal.Title>Select Language</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="language-description">
          Choose your preferred language for Gondli
        </p>
        <div className="language-options">
          <label className={`language-option ${selectedLanguage === 'English (United States)' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="language"
              value="English (United States)"
              checked={selectedLanguage === 'English (United States)'}
              onChange={handleLanguageChange}
            />
            English (United States)
          </label>
          <label className={`language-option ${selectedLanguage === 'Deutsch (German)' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="language"
              value="Deutsch (German)"
              checked={selectedLanguage === 'Deutsch (German)'}
              onChange={handleLanguageChange}
            />
            Deutsch (German)
          </label>
          <label className={`language-option ${selectedLanguage === 'Français (French)' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="language"
              value="Français (French)"
              checked={selectedLanguage === 'Français (French)'}
              onChange={handleLanguageChange}
            />
            Français (French)
          </label>
          <label className={`language-option ${selectedLanguage === 'Italiano (Italian)' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="language"
              value="Italiano (Italian)"
              checked={selectedLanguage === 'Italiano (Italian)'}
              onChange={handleLanguageChange}
            />
            Italiano (Italian)
          </label>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="change-language-button" onClick={onClose}>
          Change Language
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default LanguageModal;
