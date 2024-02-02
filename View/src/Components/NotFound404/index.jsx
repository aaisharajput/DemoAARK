import GetRoute from "../../Container/server";
import Header404 from "../../Container/header/Header_404";

export default function NotFound() {
  return (
    <>
    <Header404/>
    <div className="container py-5">
  
      <div class="text-center pt-3" >
  <img src={GetRoute("/Error-404.png")} class="img-fluid" alt="..." />
</div>
    </div>
      
    </>
  );
}
