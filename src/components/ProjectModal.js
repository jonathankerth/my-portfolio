import { useState } from 'react'

const ProjectModal = ({ project, closeModal }) => {
  const [text, setText] = useState('')

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const handleSubmit = () => {
    console.log('Case study for project:', project.title)
    console.log('Text entered:', text)
    closeModal()
  }

  return (
    <>
      {project.title === 'Nicolas Cage Movie Repository' && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/40 z-50">
          <div className="bg-white/90 backdrop-blur-sm border border-black/10 w-1/2 p-6 rounded-lg text-black">
            <embed
              src="https://mypublicucket.s3.us-west-2.amazonaws.com/NicCageStudy.pdf"
              type="application/pdf"
              className="w-full h-80 border rounded-md"
            />
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 ml-4 bg-black text-white rounded hover:bg-black/90"
                onClick={closeModal}
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
