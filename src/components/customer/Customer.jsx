export function Customer() {
  const customerData = {
    title: "Nuestros Clientes",
    description:
      "Nuestra experiencia abarca proyectos de gestión ambiental y social en diferentes sectores productivos, con un rango de clientes que incluye a las empresas, entidades del gobierno y organizaciones mas importantes de colombia y america latina",
  };

  return (
    <div id="customer" className="mt-20 p-20 w-3/5">
      <h2 className="text-7xl font-semibold leading-[5.2rem]">
        {customerData.title}
      </h2>
      <p className="pt-10 text-lg text-justify leading-5 w-[85%]">
        {customerData.description}
      </p>
      {/* Carrousel */}
    </div>
  );
}
