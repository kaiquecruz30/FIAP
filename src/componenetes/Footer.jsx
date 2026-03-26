const Footer = () => {
  return (
    
    <footer className="bottom-0 bg-black text-white p-4 text-center border-t-red-500 border-t-8">
      <p>
        &copy; {new Date().getFullYear()} Este é o final dessa pagina, não a mais nada além daqui.
      </p>
      <p>
        As imagens foram retiradas do site: <a className="hover:text-red-500 text-blue-400 underline" href="https://www.pexels.com/pt-br/">pexels</a>
      </p> 
    </footer>
  );
}

export default Footer
