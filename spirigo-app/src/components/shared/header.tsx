export function Header() {
  return (
    <header className="p-4 flex justify-between items-center sticky top-0 bg-background/80 backdrop-blur-sm z-10">
      <div className="flex items-center gap-2">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA9eOT61qd95ovaPsBzhFb0EoEqdodtYwSgatM8_Wk-F8TjTt-x1S9v-cTy4FjWs_Y-jra2tnmuzbzv3lyGMqXd36VmEFCP3-t-qPdMLz955jXMt8DTIjaONmFavjQh4Tb_qkXIhOGDm1l6DjRjanyOFpF_dLRfAFdsf42htemwtWqJ1-Qp4q8tzI3HbG3EVVkyL_omAKHTP1HhkbAkOQ4fgZSN0aT5XMNesvHDTcD7tSkiinsoUVQTEf6nDhM_meJsnQM_YWdsEM8")`,
          }}
        ></div>
        <h1 className="text-maroon dark:text-saffron text-xl font-bold">
          Spirigo
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <button className="flex cursor-pointer items-center justify-center rounded-full h-10 w-10 text-text-secondary">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCjrzWmwfCtPq5MWs-KyWe6dtw5d8cKp7-ocNKh59Hg0rOI4dsVZURI8Eysmkc7bf8SQ41jQPa43O3XQoKRw6NteS5eAAm9b4FXXQm6WmRCiss08i09iN8R9c-MO1UmvQIC9PUfQpFjVClMuMA0iCMLNffsVW-qhfe_mh3h4Z_mHofLfNj-jbVALNMKbR6cQfk_egSr6ayj2iltIBKiVg_L_ZLJLIdGNLFZhL5EIFV53FZChbLVi0dyrJj3tK7FzL8yO5i_lZwWhgo")`,
          }}
        ></div>
      </div>
    </header>
  );
}
