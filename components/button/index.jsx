function Button(props) {
  return (
    <section>
      <button className="bg-btnColor font-font-book  rounded-lg text-btnText text-center text-lg leading-5 py-5 px-10 uppercase">
        {props.text}
      </button>
    </section>
  );
}

export default Button;
