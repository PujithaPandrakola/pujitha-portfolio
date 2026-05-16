import Modal from "react-modal"

Modal.setAppElement("#root")

const ResumeModal = ({ isOpen, closeModal }) => {

  return (

    <Modal

      isOpen={isOpen}

      onRequestClose={closeModal}

      className="max-w-5xl mx-auto mt-10 bg-[#020617] p-6 rounded-3xl outline-none border border-cyan-400/20"

      overlayClassName="fixed inset-0 bg-black/70 flex justify-center items-start z-50"
    >

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl text-white font-bold">
          Resume
        </h1>

        <button

          onClick={closeModal}

          className="text-cyan-400 text-xl"
        >
          ✕
        </button>

      </div>

      <iframe

        src="/resume.pdf"

        title="Resume"

        className="w-full h-[80vh] rounded-2xl"
      ></iframe>

    </Modal>
  )
}

export default ResumeModal