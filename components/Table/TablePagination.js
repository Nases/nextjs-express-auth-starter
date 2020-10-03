import { useState, useEffect } from 'react'



const PageNumber = ({ active, children, onClick }) => {
  return (
    <a onClick={onClick} className={`${active ? 'bg-primary font-bold text-white' : 'bg-white font-medium text-gray-700 hover:bg-gray-50'} -ml-px relative inline-flex items-center px-4 py-2 cursor-pointer border border-gray-300 text-sm leading-5 focus:outline-none`}>
      {children}
    </a>
  )
}

const TablePagination = ({ totalUsersCount, currentPage, setCurrentPage, limit }) => {
  const [pagesToRender, setPagesToRender] = useState(null)

  useEffect(() => {
    if (totalUsersCount) {
      var totalNumberOfPages = Math.ceil(totalUsersCount / limit)

      var pagesArray = []
      for (var i = 1; i <= totalNumberOfPages; i++) {
        pagesArray.push(i)
      }
      pagesToRender || setPagesToRender(pagesArray)
    }
    console.log(currentPage)
  }, [totalUsersCount, pagesToRender, currentPage])

  const previousPage = () => {
    currentPage !== 1 ? setCurrentPage(currentPage - 1) : null
  }

  const nextPage = () => {
    currentPage !== pagesToRender.length ? setCurrentPage(currentPage + 1) : null
  }

  return (
    pagesToRender ?
      <tr>
        <td colSpan={100}>
          <div className="bg-white px-4 py-3 flex items-center justify-between sm:px-6">
            <div className="block sm:flex-1 sm:flex items-center justify-between">
              <div>
                <p className="text-sm leading-5 text-gray-700">
                  Showing
                  {' '}
                  <span className="font-bold">{(limit * (currentPage - 1)) + 1}</span>
                  {' '}
                  to
                  {' '}
                  <span className="font-bold">{limit * currentPage}</span>
                  {' '}
                  of
                  {' '}
                  <span className="font-bold">{totalUsersCount}</span>
                  {' '}
                  results
                </p>
              </div>
              <div className='mt-2 sm:mt-0'>
                <nav className="relative z-0 inline-flex shadow-sm">
                  <a onClick={previousPage} className="relative cursor-pointer inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Previous">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                  {
                    (((pagesToRender.length - currentPage) <= 4) || (pagesToRender.length <= 6))
                      ?
                      pagesToRender.slice(-6).map(value => {
                        return (
                          <PageNumber onClick={() => setCurrentPage(value)} active={currentPage === value} key={value}>
                            {value}
                          </PageNumber>
                        )
                      })
                      :
                      (currentPage === 1)
                        ?
                        <>
                          <PageNumber onClick={() => setCurrentPage(1)} active={currentPage === 1}>
                            {1}
                          </PageNumber>
                          <PageNumber onClick={() => setCurrentPage(2)} active={currentPage === 2}>
                            {2}
                          </PageNumber>
                          <PageNumber onClick={() => setCurrentPage(3)} active={currentPage === 3}>
                            {3}
                          </PageNumber>
                          <span className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700">
                            ...
                          </span>
                          <PageNumber onClick={() => setCurrentPage(pagesToRender.length - 2)} active={currentPage === pagesToRender.length - 2} key={pagesToRender.length - 2}>
                            {pagesToRender.length - 2}
                          </PageNumber>
                          <PageNumber onClick={() => setCurrentPage(pagesToRender.length - 1)} active={currentPage === pagesToRender.length - 1} key={pagesToRender.length - 1}>
                            {pagesToRender.length - 1}
                          </PageNumber>
                          <PageNumber onClick={() => setCurrentPage(pagesToRender.length)} active={currentPage === pagesToRender.length} key={pagesToRender.length}>
                            {pagesToRender.length}
                          </PageNumber>
                        </>
                        :
                        <>
                          <PageNumber onClick={() => setCurrentPage(currentPage - 1)} active={currentPage === currentPage - 1} key={currentPage - 1}>
                            {currentPage - 1}
                          </PageNumber>
                          <PageNumber onClick={() => setCurrentPage(currentPage)} active={currentPage === currentPage} key={currentPage}>
                            {currentPage}
                          </PageNumber>
                          <PageNumber onClick={() => setCurrentPage(currentPage + 1)} active={currentPage === currentPage + 1} key={currentPage + 1}>
                            {currentPage + 1}
                          </PageNumber>
                          <span className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700">
                            ...
                          </span>
                          <PageNumber onClick={() => setCurrentPage(pagesToRender.length - 2)} active={currentPage === pagesToRender.length - 2} key={pagesToRender.length - 2}>
                            {pagesToRender.length - 2}
                          </PageNumber>
                          <PageNumber onClick={() => setCurrentPage(pagesToRender.length - 1)} active={currentPage === pagesToRender.length - 1} key={pagesToRender.length - 1}>
                            {pagesToRender.length - 1}
                          </PageNumber>
                          <PageNumber onClick={() => setCurrentPage(pagesToRender.length)} active={currentPage === pagesToRender.length} key={pagesToRender.length}>
                            {pagesToRender.length}
                          </PageNumber>
                        </>
                  }
                  {/* <span className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700">
                    ...
                  </span> */}
                  <a onClick={nextPage} className="-ml-px relative cursor-pointer inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Next">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </td>
      </tr> : <tr></tr>
  )
}

export default TablePagination