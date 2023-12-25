import CardContainer from "./UI/CardContainer/CardContainer"


const Outline1 = () => {
  return (
    <div className='w-[290px] h-[180px] bg-white shadow-xl rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 p-1'>
        <div className=" p-3 bg-white rounded-md">
        <CardContainer title={" Rounded Card"}
         paragraph={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut laboriosam praesentium adipisci iure doloribus accusamus animi quos."}>
        </CardContainer>
        </div>
    </div>
  )
}

export default Outline1