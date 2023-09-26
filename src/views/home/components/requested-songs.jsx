import { Button } from "../../../components";

export const RequestedSongs = () => {
  return (
    <div className="py-10 px-8 bg-purpal ">
      <div className="flex justify-center flex-wrap gap-8 relative items-center">
        {/* left */}
        <div className="">
          <img
            className="object-cover"
            src="https://static.wixstatic.com/media/c142e99712d4bb42acc2632cc16bb5bd.jpg/v1/crop/x_461,y_0,w_850,h_998/fill/w_575,h_675,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/RockinDJ.jpg"
            alt=""
          />
        </div>
        {/* right */}
        <div className="flex flex-col gap-4 absolute sm:static transition p-4">
          <h1 className="text-white text-5xl text-wrap font-bold">
            Request Your Favorite Songs Live
          </h1>
          <Button label="Request for Music" onClick={() => null} />
        </div>
      </div>
    </div>
  );
};
