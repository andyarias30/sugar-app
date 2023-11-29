export default function NewLevel({userName, beforeBreakfast, beforeLunch, beforeDinner, other }){
return(
    <>
    <h1>{userName}</h1>
    <p>{beforeBreakfast}</p>
    <p>{beforeLunch}</p>
    <p>{beforeDinner}</p>
    <p>{other}</p>

    </>
)
}