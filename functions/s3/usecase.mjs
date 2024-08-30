import {ListBucketsCommand, S3Client} from '@aws-sdk/client-s3';

/**
 * S3バケットを一覧する
 * @param {object} event
 * @param {S3Client} s3Client
 * @returns {Promise<{body: string, statusCode: number}>}
 */
export const invoke = async (event, s3Client) => {
  try {
    const data = await s3Client.send(new ListBucketsCommand({}));
    const bucketNames = data.Buckets.map(bucket => bucket.Name);
    console.log('Bucket names:', bucketNames);
  } catch (err) {
    console.error('Error listing buckets:', err);
    throw err;
  }

  return {
    statusCode: 200,
    body: 's3 test'
  }
}
