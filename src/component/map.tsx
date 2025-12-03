import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export function MaperContact(){
    const coord = {
        'longitude': 48.8648965  ,
        'lagitude' : 2.4880735
    } ;
    // [48.8648965, 2.4880735];
    
    // ⭐ URL de l'adresse sur Google Maps
    // Nous encodons l'adresse pour qu'elle soit correctement reconnue dans l'URL.
    const address = "113 AVENUE JEAN JAURES, 93110 ROSNY-SOUS-BOIS";
    const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

    return (
        <>
            <MapContainer 
                center={[coord.longitude, coord.lagitude]} 
                zoom={16} 
                scrollWheelZoom={false} 
                style={{ height: '200px', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                <Marker position={[coord.longitude, coord.lagitude]}>
                    <Popup>
                        {/* ⭐ Le contenu du Popup est du JSX, vous pouvez y inclure des liens */}
                        **113 AVENUE JEAN JAURES**<br />
                        93110 ROSNY-SOUS-BOIS<br />
                        <hr style={{ margin: '5px 0' }} />
                        <a 
                            href={mapsLink} 
                            target="_blank" // Ouvre le lien dans un nouvel onglet
                            rel="noopener noreferrer" // Bonne pratique de sécurité
                            style={{ color: '#007bff', fontWeight: 'bold' }}
                        >
                            Voir sur Google Maps 🗺️
                        </a>
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    );
}