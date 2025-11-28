export function ConditionsPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-white font-inter">
      {/* En-tête de page avec dégradé sombre et titre accrocheur */}
      <header className="relative bg-[#121212] ">
        {/* Effet de lumière radial subtil */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        
        {/* Contenu de l'en-tête */}
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-3xl">
            {/* Tag / Étiquette de catégorie */}
            <div className="inline-block px-4 py-1.5 bg-amber-600/10 border border-amber-600/20 rounded-full mb-6">
              <span className="text-amber-600 text-sm font-medium">Documents légaux</span>
            </div>
            
            {/* Titre principal */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">Conditions générales</h1>
            
            {/* Sous-titre descriptif */}
            <p className="text-xl text-slate-300 leading-relaxed">
              Modalités de commande et de livraison pour votre véhicule d'importation
            </p>
          </div>
        </div>
      </header>

      {/* Corps du contenu principal */}
      <main className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="prose prose-lg max-w-none">
          {/* Bloc d'information sur la TVA / l'avantage prix */}
          <div className="bg-slate-50 border-l-4 border-slate-900 p-8 rounded-r-lg mb-12 shadow-sm">
            <p className="text-slate-700 leading-relaxed m-0 ">
              L'avantage de nos prix de vente par rapport au prix marché est du au fait que les importations effectuées
              par notre société ne sont plus soumises à une TVA supplémentaire de 20% car nous sommes un professionnel
              Automobile et disposons d'un numéro de TVA INTRA pour exporter dans toute l'Europe sans taxes
              supplémentaires.
            </p>
          </div>

          {/* Section 1: Modalités de livraison */}
          <section id="livraison" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg">
                {/* Icône d'information */}
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl text-white font-bold text-slate-900 m-0">Modalités de livraison</h2>
            </div>

            <div className="space-y-4 text-slate-600 text-white leading-relaxed">
              <p>
                Nous livrons dans tous les pays de l'Europe mais également dans les DOM-TOM. Tous nos véhicules sont
                vendus avec le contrôle technique à jour, la carte grise officielle et le certificat de non gage, le
                certificat de conformité européenne, le carnet d'entretien constructeur et les factures d'entretiens.
              </p>
              <p>
                Notre société s'occupe, en lieu et place et pour le client, de toutes démarches et formalités
                administrative relative à la légalisation et à l'immatriculation définitive de la voiture au nom de
                l'acheteur.
              </p>
              <p className="font-semibold text-slate-900 p-2 bg-yellow-50 rounded-lg">Aucun frais supplémentaire à prévoir pour le client.</p>
              <p>
                La voiture est livrée dans un premier temps avec la carte grise provisoire et les plaques
                d'immatriculations provisoires (WW). Les plaques et la carte grise définitives ne seront établies et
                envoyées à l'acquéreur qu'à l'issu de la période d'essai qui est de 14 jours (délai de rétractation
                légale).
              </p>
              <p>
                Toutes nos voitures sont livrées avec une garantie constructeur minimum de 24 mois valable auprès de
                tous les garages certifiés de la marque du véhicule dans tous les pays d'Europe. Sans oublier que nos
                livraisons sont couvertes par le délai de rétractation légale de 14 Jours qui vous permet de refuser, de
                demander un remplacement de voiture ou de demander un remboursement intégral de l'acompte payé si à la
                livraison la voiture ne convient pas à vos attentes.
              </p>
              <p>
                Une assurance tous risques transport est mis en place par notre société pour couvrir tout dommage ou
                problème qui pourraient survenir au cours de la livraison.
              </p>
            </div>
          </section>

          {/* Section 2: Type, tarif et suivi de livraison */}
          <section id="tarifs" className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                {/* Icône de tarifs/documents */}
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white text-slate-900 m-0">Type, tarif et suivi de livraison</h2>
            </div>

            {/* Grille des options de livraison */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Carte Standard Europe */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-sm font-semibold text-amber-600 mb-2">LIVRAISON STANDARD EUROPE</div>
                <div className="text-3xl font-bold text-slate-900 mb-2">1000€</div>
                <div className="text-slate-600 text-sm mb-4">Délai: 5-7 jours ouvrés</div>
                <div className="text-slate-600 text-sm leading-relaxed">
                  Avec tous les documents et formalités administratives nécessaires
                </div>
              </div>

              {/* Carte Standard DOM-TOM */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-sm font-semibold text-amber-600 mb-2">LIVRAISON STANDARD  EUROPE DOM-TOM</div>
                <div className="text-3xl font-bold text-slate-900 mb-2">2000€</div>
                <div className="text-slate-600 text-sm mb-4">Délai: 4-5 semaines</div>
                <div className="text-slate-600 text-sm leading-relaxed">
                  Avec tous les documents et formalités administratives nécessaires
                </div>
              </div>

              {/* Carte VIP Europe (sur fond sombre) */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl">
                <div className="text-sm font-semibold text-amber-400 mb-2">LIVRAISON VIP EUROPE</div>
                <div className="text-3xl font-bold text-white mb-2">1500€</div>
                <div className="text-slate-300 text-sm mb-4">Délai: 3 jours (chargement unique)</div>
                <div className="text-slate-300 text-sm leading-relaxed">
                  Avec tous les documents et formalités administratives nécessaires
                </div>
              </div>

              {/* Carte VIP DOM-TOM (sur fond sombre) */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl">
                <div className="text-sm font-semibold text-amber-400 mb-2">LIVRAISON VIP  EUROPE DOM-TOM</div>
                <div className="text-3xl font-bold text-white mb-2">3500€</div>
                <div className="text-slate-300 text-sm mb-4">Délai: 18 jours maximum</div>
                <div className="text-slate-300 text-sm leading-relaxed">
                  Conteneur de 20 pieds avec tous les documents nécessaires
                </div>
              </div>
            </div>

            {/* Bloc d'information sur le suivi de livraison */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-sm">
              <p className="text-slate-700 leading-relaxed m-0">
                Pour permettre au client de suivre chacune des étapes de sa commande et de la livraison de son véhicule,
                dès la validation de votre commande, un code de suivi / tracking lui sera communiqué afin de lui
                permettre de suivre l'évolution de votre commande et de sa livraison de la plateforme de l'entreprise
                chargée de nos livraisons.
              </p>
            </div>
          </section>

          {/* Avertissement: Conditions obligatoires */}
          <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-8 mb-16 shadow-md">
            <h3 className="text-xl font-bold text-slate-900 mb-4 mt-0">Conditions obligatoires et non négociables</h3>
            <p className="text-slate-700 leading-relaxed m-0">
              Pour commander une voiture et avoir livraison, le client doit accepter et être en mesure de payer par
              virement bancaire immédiat ou instantané une caution de commande conformément aux trois modalités listées
              ci-dessous car notre société ne peut en aucun cas, s'engager à livrer une voiture à un client sans un réel
              engagement financier.
            </p>
          </div>

          {/* Section 3: Modalités de commande (Options de paiement) */}
          <section id="paiement" className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg">
                {/* Icône de carte bancaire / paiement */}
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white text-slate-900 m-0">Modalités de commande</h2>
            </div>

            <div className="space-y-6">
              {/* Option 1: Caution de 30% */}
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-slate-300 transition-colors shadow-md">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 border border-slate-300">
                    <span className="text-xl font-bold text-slate-900">1</span>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mt-1">Commande avec caution de 30%</h4>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed md:ml-14">
                  <p>
                    Le client peut commander son véhicule en toute sécurité et fiabilité grâce aux règlements par
                    virement bancaire qui offrent plus de traçabilité et de transparence. Il peut à cet effet, opter de
                    valider sa commande en payant une caution de commande de 30% plus les frais de livraison sans
                    possibilité de remise.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <p className="font-semibold text-slate-900 mb-2">Exemple pratique (Voiture 10.000€ + 1000€ livraison):</p>
                    <p className="m-0">
                      30% de 10.000€ (3000€) + 1000€ de frais de livraison ={" "}
                      <span className="font-bold text-slate-900">4000€ de caution</span>.
                    </p>
                  </div>
                  <p className="text-sm font-medium text-slate-900">
                    Le solde restant (7000€) est réglé à la livraison du véhicule par virement bancaire.
                  </p>
                </div>
              </div>

              {/* Option 2: Caution de 50% (Mise en avant) */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-400 rounded-2xl p-8 hover:border-amber-500 transition-colors shadow-xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0 border border-amber-700">
                    <span className="text-xl font-bold text-white">2</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 mt-1">Commande avec caution de 50%</h4>
                    <div className="inline-block mt-2 px-3 py-1 bg-amber-600 text-white text-sm font-semibold rounded-full shadow-md">
                      -10% de réduction sur le prix du véhicule
                    </div>
                  </div>
                </div>
                <div className="space-y-4 text-slate-700 leading-relaxed md:ml-14">
                  <p>
                    Selon cette modalité, le client peut opter de valider sa commande en payant une caution de commande
                    de 50% plus les frais de livraison afin de bénéficier d'une remise de 10% sur le tarif affiché de la
                    voiture.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-amber-300">
                    <p className="font-semibold text-slate-900 mb-2">Exemple pratique (Voiture 10.000€ + 1000€ livraison):</p>
                    <p className="m-0">
                      Prix après 10% de remise : 9.000€. Caution (50% de 9.000€ soit 4500€) + 1000€ de frais de livraison ={" "}
                      <span className="font-bold text-slate-900">5500€ de caution</span>.
                    </p>
                  </div>
                  <p className="font-medium text-slate-900">
                    Le solde restant à régler à la livraison est de 4500€ (50% de 9.000€).
                  </p>
                </div>
              </div>

              {/* Option 3: Achat comptant (Option VIP) */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-amber-600 rounded-2xl p-8 text-white shadow-2xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0 border border-amber-500">
                    <span className="text-xl font-bold text-white">3</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mt-1">Commande avec achat comptant</h4>
                    <div className="inline-block mt-2 px-3 py-1 bg-amber-600 text-white text-sm font-semibold rounded-full shadow-md">
                      -20% de réduction sur le prix du véhicule
                    </div>
                  </div>
                </div>
                <div className="space-y-4 text-slate-300 leading-relaxed md:ml-14">
                  <p>
                    Un véhicule commandé avec un règlement intégral avant livraison, vous donne droit à une réduction de
                    20% sur le tarif de la voiture et à des avantages exclusifs.
                  </p>
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <p className="font-semibold text-white mb-3">Avantages exclusifs:</p>
                    <ul className="space-y-2 m-0 list-none p-0">
                      <li className="flex items-start gap-2">
                        {/* Icône de coche */}
                        <svg
                          className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Prolongation de la période d'essai jusqu'à 30 jours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        {/* Icône de coche */}
                        <svg
                          className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Extension de garantie constructeur jusqu'à 60 mois</span>
                      </li>
                      <li className="flex items-start gap-2">
                        {/* Icône de coche */}
                        <svg
                          className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Livraison gratuite en France pour tout véhicule ≥ 15.000€</span>
                      </li>
                      <li className="flex items-start gap-2">
                        {/* Icône de coche */}
                        <svg
                          className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Livraison rapide sous 4 jours selon votre convenance</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-slate-600">
                    <p className="font-semibold text-slate-900 mb-2">Exemple pratique (Voiture 15.000€):</p>
                    <p className="text-slate-700 m-0">
                      Prix après 20% de remise : 12.000€. Livraison gratuite ={" "}
                      <span className="font-bold text-slate-900">12.000€ au total</span> au lieu de 16.000€ (prix initial + livraison).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Avertissement de paiement exigé */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <div className="flex items-start gap-4">
              {/* Icône d'avertissement */}
              <svg className="w-8 h-8 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-lg font-bold m-0">
                LE PAIEMENT DE LA CAUTION DE COMMANDE EST EXIGÉ APRÈS L'ÉTABLISSEMENT ET LA SIGNATURE DU BON DE COMMANDE.
              </p>
            </div>
          </div>

          {/* Texte final sur le remboursement et le mandat bancaire */}
          <div className="space-y-6 text-slate-600 text-white leading-relaxed mb-12">
            <p>
              Notre société s'engage également à un retour immédiat des fonds payés par l'acheteur si à la livraison du
              véhicule ce dernier ne correspond pas aux attentes de l'acheteur ou si le véhicule ne correspond aux
              détails fournis lors de la vente à l'acquéreur. La commande lancée peut-être annulée à la livraison en cas
              de défauts administratifs et/ou mécanique.
            </p>
            <p>
              Le remboursement est immédiat et ou avec proposition du même modèle. (APPLICATION STRICTE DE LA LOI SUR LA
              CONSOMMATION et DU DROIT DE RETRACTATION DE L'ACQUEREUR).
            </p>
            <p className="p-4 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-800">
              Notre société se réserve le droit de mettre directement à disposition du client ou l'acquéreur les
              coordonnées bancaires (RIB) du mandataire qui sera affecté à la commande du client afin que ce dernier
              s'en serve pour l'exécution du virement bancaire. Dans ce cas, notre société se porte entièrement garant
              de tout litige qui pourrait découler de l'usage de ce RIB personnel.
            </p>
            <p>
              Une fois le bon de commande signé, il équivaut à un contrat. Il s'agit donc pour l'entreprise de fournir
              la marchandise commandée et au client de s'acquitter du paiement selon les règles établies auparavant.
            </p>
          </div>

          {/* Section 4: Facilité de paiement (Crédit) */}
          <section id="facilite" className="mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-400 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  {/* Icône de monnaie */}
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-0">Facilité de paiement</h3>
                  <p className="text-slate-700 mb-6">
                    Pour un paiement en plusieurs fois, vous aurez à verser un acompte minimum de 35% et les 65% restants
                    en mensualité, sur une durée de votre choix entre 6 à 36 mois à un taux de 0%.
                  </p>
                  <div className="bg-white rounded-lg p-6 border border-blue-200 shadow-inner">
                    <p className="font-semibold text-slate-900 mb-3">Documents à fournir pour l'étude de dossier :</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-slate-700">Pièce d'identité</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-slate-700">Facture de domicile de moins de 3 mois</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-slate-700">RIB (Relevé d'Identité Bancaire)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
    </div>
  );
}
