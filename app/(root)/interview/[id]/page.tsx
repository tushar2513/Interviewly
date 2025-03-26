import { getInterviewById } from "@/lib/actions/general.action";
import { redirect } from "next/navigation";
import Image from "next/image";
import { getRandomInterviewCover } from "@/lib/utils";

const page = async ({params}: RouteParams) => {
    const { id } = await params; 
    const interview = await getInterviewById(id)

    if(!interview) redirect('/')
  return (
    <>
    <div className="flex flex-row gap-4 justify-between ">
        <div className="flex flex-row gap-4 items-center max-sm:flex-col">
            <div className="flex flex-row gap-4 items-center">
                <Image src={getRandomInterviewCover()} alt="cover-image" width={40} height={40} className="rounded-full object-cover size-[40px]"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default page