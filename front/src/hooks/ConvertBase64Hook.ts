export const convertImageToBase64 = (file: File, callback: (base64Data: string) => void) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64Data = reader.result as string;
      callback(base64Data);
    };
  
    reader.readAsDataURL(file);
  };