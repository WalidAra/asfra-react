let updateAuthToken: (newToken: string) => void = () => {};

export const setAuthTokenUpdater = (updater: (newToken: string) => void) => {
  updateAuthToken = updater;
};

export const getAuthTokenUpdater = () => updateAuthToken;
