import { useMemo } from "react";

export const MusicCard = ({
  title,
  id,
  artist,
  thumbnail,
  duration,
  reqMusics = [],
  onReqMusic,
  status,
}) => {
  const isSameReq = useMemo(
    () => reqMusics?.some((el) => el === id),
    [reqMusics, id]
  );
  return (
    <div className="flex justify-between mb-4 w-full border-b items-center">
      <div className="flex gap-2 mb-4">
        <div className="w-28 h-18 rounded-md">
          <img
            src={thumbnail}
            className="object-cover rounded-md h-full w-full"
          />
        </div>
        <div>
          <h3 className="text-xs">{title}</h3>
          <p className="text-gray-300 text-x">{artist}</p>
          <p className="text-gray-300 text-x">{duration}</p>
        </div>
      </div>
      {status !== "Approve" ? (
        <>
          {!isSameReq ? (
            <button
              className="p-2 text-purple-100 text-x rounded-lg bg-gradient-to-r from-purple-600 to-purple-400"
              onClick={() => onReqMusic(id)}
            >
              Request For Play
            </button>
          ) : (
            <button
              className="p-2 text-black text-x rounded-lg bg-gradient-to-b from-orange-500 to-yellow-300"
              onClick={() => onReqMusic(id)}
            >
              Waiting For Approval
            </button>
          )}
        </>
      ) : (
        <button
          disabled
          className="p-2 px-4 text-purple-100 text-x rounded-lg bg-gradient-to-r from-green-500 to-green-700 opacity-60 cursor-not-allowed"
          onClick={() => onReqMusic(id)}
        >
          Accepted
        </button>
      )}
    </div>
  );
};
