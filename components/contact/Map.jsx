export default function Map() {
  return (
    <iframe
      className="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.7470214626447!2d-122.33025712346305!3d47.32045397127078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549057a529b0c515%3A0x3d22440a5e049d1!2s33309%201st%20Way%20S%20a206%2C%20Federal%20Way%2C%20WA%2098003!5e0!3m2!1sen!2sus!4v1703523361149!5m2!1sen!2sus"
      width="100%"
      height={724}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
 }