export default function IframeGmaps({ userLocation }) {
  return (
    <section className="max-w-3xl mx-auto px-4">
      <iframe
        src={`https://maps.google.com/maps?q=${userLocation ? userLocation.latitude : '-6.175392'},${userLocation ? userLocation.longitude : '106.827153'}&t=&z=15&ie=UTF8&iwloc=&output=embed`} width="600" height="450" style={{ border: '0', width: '100%' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      {/* https://www.google.com/maps/search/?api=1&query=-6.206559287798092,106.80442497732038 */}
    </section>

  )
}
