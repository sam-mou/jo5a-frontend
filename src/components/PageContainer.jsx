function PageContainer({ children }) {
    return (
      <div className="max-w-screen-lg mx-auto">
        {children}
      </div>
    );
  }
  
  export default PageContainer;