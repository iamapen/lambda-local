const {S3Client, ListBucketsCommand} = require("@aws-sdk/client-s3");

/**
 * S3バケットを一覧する
 * @param event
 * @returns {Promise<{body: string, statusCode: number}>}
 */
exports.handler = async (event) => {
  const s3Client = new S3Client({
    region: "ap-northeast-1",
    endpoint: "http://localhost:4566",
    credentials: {
      accessKeyId: 'dummy',
      secretAccessKey: 'dummy'
    }
  });

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
    body: 'hello world'
  }
}
