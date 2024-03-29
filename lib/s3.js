import dotenv from 'dotenv'
import aws from 'aws-sdk'
import crypto from 'crypto'
import { promisify } from 'util'

dotenv.config()

const randomBytes = promisify(crypto.randomBytes)

const region = 'us-west-2'
const bucketName = 'catmemes'
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4',
})
export async function generateUploadURL(fileType) {
  if (!fileType.startsWith('image/')) {
    throw new Error('Invalid file type, only images are allowed.')
  }

  const rawBytes = await randomBytes(16)
  const imageName = rawBytes.toString('hex')

  const params = {
    Bucket: bucketName,
    Key: imageName,
    Expires: 60,
    ContentType: fileType,
  }

  const uploadURL = await s3.getSignedUrlPromise('putObject', params)
  return uploadURL
}
