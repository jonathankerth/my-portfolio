import { generateUploadURL } from '../../../lib/s3'

export default async (req, res) => {
  if (req.method === 'GET') {
    const fileType = req.query.fileType
    try {
      const url = await generateUploadURL(fileType)
      res.status(200).send({ url })
    } catch (error) {
      res.status(400).send(error.message)
    }
  } else {
    res.status(405).end() // Method Not Allowed
  }
}
