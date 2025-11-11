const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const withBasePath = (path: string) => {
  if (!path) {
    return path;
  }

  if (path.startsWith('http') || path.startsWith('data:')) {
    return path;
  }

  if (path.startsWith(basePath)) {
    return path;
  }

  return `${basePath}${path}`;
};

export const getBasePath = () => basePath;
