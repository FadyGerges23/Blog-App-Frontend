const PageIndicator = ({ totalPages, currentPage, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
      <div className="page-indicator">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={pageNumber === currentPage ? 'active' : ''}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    );
}

export default PageIndicator;