const UserDasbboard = () => {
  return (
    <div className="h-[85vh] overflow-hidden bg-gradient-to-tr from-gray-800 via-newDarkGreen to-gray-800 px-[10vw] pt-[4vw] flex justify-between">
      <div className="bg-white w-full rounded-md px-9 py-8 overflow-y-auto">
        <iframe
          src="https://drive.google.com/file/d/1iRMf7ARSMTwsrwsivLTGjRqAVka28__n/preview"
          style={{ width: "100%", height: "100%", border: "none" }}
          allow="autoplay"
        />
      </div>
    </div>
  );
};

export default UserDasbboard;
