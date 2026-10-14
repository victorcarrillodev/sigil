type ObjectUrlApi = Pick<typeof URL, "createObjectURL" | "revokeObjectURL">;

export function createRequestDownload(urlApi: ObjectUrlApi = URL) {
  let currentUrl = "";

  const revoke = () => {
    if (currentUrl) urlApi.revokeObjectURL(currentUrl);
    currentUrl = "";
  };

  return {
    get href(): string {
      return currentUrl;
    },
    prepare(text: string): string {
      revoke();
      currentUrl = urlApi.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
      return currentUrl;
    },
    revoke,
  };
}
