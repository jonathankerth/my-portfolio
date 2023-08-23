import { generateUploadURL } from '../../../lib/s3'

export default async (req, res) => {
  if (req.method === 'GET') {
    const url = await generateUploadURL()
    res.status(200).send({ url })
  } else {
    res.status(405).end() // Method Not Allowed
  }
}
