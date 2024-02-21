import { generateUploadURL } from '../../../lib/s3'

const uploadURLHandler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const fileType = req.query.fileType
      const url = await generateUploadURL(fileType)
      res.status(200).send({ url })
    } catch (error) {
      res.status(400).send({ error: error.message })
    }
  } else {
    res.status(405).end()
  }
}

export default uploadURLHandler
