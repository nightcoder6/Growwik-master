

const FileUploadProgress= ({ filePrec }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-2 flex justify-between items-center">
        <span className="text-sm font-medium text-white">Uploading...</span>
        <span className="text-sm font-medium text-white">{filePrec}%</span>
      </div>
      <div className="h-4 w-full bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
        <div 
          className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${filePrec}%` }}
        >
          <div className="w-full h-full opacity-30 animate-pulse bg-gradient-to-r from-yellow-400 to-orange-500"></div>
        </div>
      </div>
      <div className="mt-2 text-center text-white">
        <span className="text-xs italic">File upload in progress</span>
      </div>
    </div>
  );
};

export default FileUploadProgress;
