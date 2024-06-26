type TButtonProps = {
    title: string;
    clickHandler?: (event: unknown) => void;
    isDisabled?: boolean;
    extraStyle?: string;
}

export default function Button({title, clickHandler, isDisabled, extraStyle = ''}:TButtonProps) {
  return (
    <button 
        type="submit"
        className={`px-6 py-2 uppercase font-semibold rounded-lg border-2 border-black text-white bg-black   ${isDisabled? ' opacity-20' : 'hover:text-black hover:bg-white hover:bg-opacity-30'}`+' '+extraStyle}
        onClick={clickHandler}
        disabled={isDisabled}
    >
        {title}
    </button>
  )
}