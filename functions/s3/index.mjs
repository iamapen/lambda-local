import {S3Client} from '@aws-sdk/client-s3';
import {invoke} from "./usecase.mjs";

/**
 * S3バケットを一覧する
 * @param event
 * @returns {Promise<{body: string, statusCode: number}>}
 */
export const handler = async (event) => {
  console.log('start');
  const s3Client = new S3Client({});

  return await invoke(event, s3Client);
}
