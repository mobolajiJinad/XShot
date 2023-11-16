import OnileIsmail from "../../assets/OnileIsmail.png";
import OnileIsmailWork from "../../assets/OnileIsmailWork.png";

const Main = () => {
  return (
    <main className="mx-0 my-4 px-6 py-0">
      <div className="mb-10 mt-4 flex items-center justify-between">
        <img src={OnileIsmailWork} alt="Onile Ismail Image" className="w-1/2" />

        <div>
          <div className="flex items-center justify-between">
            <div className="ml-8 text-center">
              <h3 className="text-center text-5xl capitalize">Onile Ismail</h3>
              <span className="mt-2 block">Photographer and Editor</span>
              <span className="mt-2 block">
                Houston City, Makaveli road. United State.
              </span>
            </div>

            <img
              src={OnileIsmail}
              alt="Onile Ismail Profile"
              className="h-auto w-40"
            />
          </div>

          <p className="p-4 text-center text-base">
            This page or place contains a short biography of the designer about
            each of the pictures and every other information he might deem fit
            or worthy to share for assessment by his potential client, it could
            contain the inspiration behind taking those pictures too.... i guess
            its all allowed. might deem fit or worthy to share for assessment by
            his potential client, it could contain the inspiration behind taking
            those pictures too.... i guess its all allowed.might deem fit or
            worthy to share for assessment by his potential client, it could
            contain the inspiration behind taking those pictures too.... i guess
            its all allowed.
          </p>
        </div>
      </div>

      <div className="mb-10 mt-4 flex items-center justify-between">
        <div className="w-[46%]">
          <p className="text-center">
            This page or place contain a really explicit description provided y
            the designer about each of the pictures and every other information
            he might deem fit or worthy to share for assessment by his potential
            client, it could contain the inspiration behind taking those
            pictures too.... i guess its all allowed.
          </p>

          <h3 className="mt-12 text-center font-Lora text-3xl uppercase text-[#b2917f]">
            The OLUBIRIPO OF AREPO LAND
          </h3>
        </div>

        <div className="flex w-[46%] flex-col items-center">
          <a href="#" className="w-[60%]">
            <button className="mx-auto my-4 w-full rounded-3xl border-2 border-solid border-[#906f4d] bg-[#002a34cc] px-0 py-3 text-base text-[#e1b485]">
              Book this creative
            </button>
          </a>

          <a href="#" className="w-[60%]">
            <button className="mx-auto my-4 w-full rounded-3xl border-2 border-solid border-[#906f4d] bg-[#906f4d] px-0 py-3 text-base text-[#002a34]">
              Other works by this creative
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Main;
