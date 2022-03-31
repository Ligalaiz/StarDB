const getErrorMessageUtils = (error: unknown) => {
  if (error instanceof Error) return error.message;
  return String(error);
};

const reportErrorUtils = ({
  message,
  cb,
}: {
  message: string;
  cb?: (({ error }: { error: string }) => void) | undefined | null;
}) => {
  if (cb) {
    cb({ error: message });
  }
  console.log(message);
};

export { getErrorMessageUtils, reportErrorUtils };
