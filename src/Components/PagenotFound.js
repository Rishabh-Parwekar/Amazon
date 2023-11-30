function PagenotFound(){
    return (
        <div class="px-4 py-5 my-5 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg>
    <h1 class="display-5 fw-bold text-body-emphasis">404 PageNotFound</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">the page you were trying to reach on a website couldn't be found on their server. To be clear, the error indicates that while the server itself is reachable, the specific page showing the error is not.</p>
    </div>
  </div>
    )
}
export default PagenotFound;