export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  callback: Function,
) => {
  if (!file) {
    return callback(new Error('File is empty'), false);
  }

  const fileExtension = file.mimetype.split('/').at(1);
  const validExtensions = ['jpg', 'jpeg', 'png'];

  if (!validExtensions.includes(fileExtension)) {
    return callback(null, false);
  }

  callback(null, true);
};
