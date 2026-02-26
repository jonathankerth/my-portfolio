const ProjectModal = ({ project, closeModal }) => {
  return (
    <>
      {project.title === 'Nicolas Cage Movie Repository' && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/40 z-50"
          role="dialog"
          aria-modal="true"
          aria-label={`Case study for ${project.title}`}
        >
          <div className="bg-white/90 backdrop-blur-sm border border-black/10 w-1/2 p-6 rounded-lg text-black">
            <embed
              src="https://mypublicucket.s3.us-west-2.amazonaws.com/NicCageStudy.pdf"
              type="application/pdf"
              className="w-full h-80 border rounded-md"
              title="Nicolas Cage Movie Repository Case Study PDF"
            />
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 ml-4 bg-black text-white rounded hover:bg-black/90"
                onClick={closeModal}
                aria-label="Close case study modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectModal
