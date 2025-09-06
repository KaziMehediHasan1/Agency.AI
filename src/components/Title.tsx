const Title = ({ title, desc }: { title: string; desc: string }) => {
  return <>
    <h2 className="font-medium text-3xl sm:text-5xl">{title}</h2>
    <p className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-6">{desc}</p>
  </>;
}; 

export default Title;
