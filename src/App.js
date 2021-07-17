import React, {useState} from 'react';
import './App.css';
import Modal from 'components/Modal';
import Toast from 'components/Toast';

const modalContainer = document.getElementById('modals');
const toastContainer = document.getElementById('toasts');

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);

  const toggleModal = () => {
    modalContainer.classList.toggle("show");
    setIsModalOpen(!isModalOpen);
  }

  const accept = () => {
    toastContainer.classList.add("show");
    setIsToastOpen(true);
  };

  setTimeout(() => {
    setIsToastOpen(false);
    toastContainer.classList.remove("show");
  }, 2000);

  return (
    <div className="App">
      <div className="very">
          <div className="complicated">
            <div className="and">
              <div className="nested">
                <div className="component">
                  <p>Conveniently drive interactive scenarios rather than
                    plug-and-play materials. Dramatically strategize ethical
                    markets with top-line metrics. Proactively fabricate
                    clicks-and-mortar information through mission-critical
                    internal or "organic" sources. Intrinsicly syndicate premium
                    expertise vis-a-vis tactical technology. Credibly streamline
                    virtual e-commerce rather than web-enabled experiences.
                    Collaboratively disseminate exceptional.</p>
                    <button className="btn modal-btn" onClick={toggleModal}>More info</button>
                    <button className="btn toast-btn" onClick={accept}>Accept</button>
                    <Modal onClose={toggleModal} isModalOpen={isModalOpen} />
                    <Toast isToastOpen={isToastOpen} />
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
