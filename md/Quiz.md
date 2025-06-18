### Domanda 1
**In che modo possiamo esprimere i vincoli (cioè le constraint) in un diagramma delle classi UML?**  
- Le specifiche UML non danno informazioni in merito; l'unica regola è indicare i vincoli tra parentesi tonde  
- Indicandoli tra parentesi graffe attraverso il linguaggio naturale, un linguaggio di programmazione o OCL (Object Constraint Language)  
- Non serve un modo esplicito per aggiungere vincoli aggiuntivi: tutti i vincoli si possono esprimere mediante associazioni, attributi e generalizzazione  
- Unicamente utilizzando il linguaggio OCL (Object Constraint Language)  

### Domanda 2
**Cosa indica un alto Fan-out tra moduli (o componenti) di un sistema software?**  
- Indica buon riuso  
- Indica eccessiva dipendenza tra moduli e che il modulo andrebbe decomposto  
- Indica alto accoppiamento (Content coupling) tra moduli  
- Indica violazione dell'Information Hiding  

### Domanda 3
**Quale tra le seguenti affermazioni relative ai diagrammi di sequenza (sequence diagram) è vera?**  
- Ogni linea di vita rappresenta un metodo  
- Un messaggio m() da un oggetto di classe A ad un oggetto di classe B implica che m() sia un'operazione della classe B  
- Un messaggio di tipo trovato descrive un metodo che effettua una ricerca di elementi in una collezione  
- Si tratta di un tipo di diagramma usato per modellare aspetti statici  

### Domanda 4
**Nel contesto dello stile architetturale a micro-servizi (micro-service), quale è la funzione dell'API Gateway?**  
- Permette la comunicazione punto a punto tra i vari micro-servizi del sistema SW  
- Permette la comunicazione tra i vari micro-servizi e il DB centrale del sistema SW  
- Agisce come un Observer, monitorando il corretto funzionamento del sistema SW  
- Agisce come un Facade, esponendo un'interfaccia verso il client e gestendo le chiamate ai vari micro-servizi  

### Domanda 5
**Quale tra le seguenti affermazioni in merito al software testing è errata/falsa?**  
- La bontà di una test suite si misura esclusivamente in base al numero di fault trovati nel codice che essa testa  
- Il criterio di copertura All Paths coverage può generare cammini infeasible  
- Il black box testing è una tecnica di testing particolarmente indicata per testare il software a livello di sistema (System level)  
- Applicando Equivalence Partitioning nel modo classico su un range di valori [0, 100] si ottengono tre classi di equivalenza  

### Domanda 6
**Di solito usare componenti SW a grana grossa (Large-grain) in un sistema SW:**  
- Riduce la performance  
- Migliora performance e maintainability  
- Migliora la maintainability  
- Migliora la performance ma riduce la maintainability  

### Domanda 7
**In base al class diagram Rubrica e Contatto, quale sequence diagram è corretto per modellare la creazione di un nuovo contatto?**  
- A  
- B  
- C  
- D  

### Domanda 8
**Che cosa è l'OMG?**  
- Un consorzio di aziende (tra cui Microsoft, Digital e HP) che crea standard come CORBA, UML e XMI  
- Un'azienda statunitense nota per i report di project management e analisi di progetti  
- Una delle più grandi aziende informatiche mondiali per fatturato e capitalizzazione  
- Un consorzio di aziende che ha creato standard di software testing come ISO/IEC/IEEE 291119  

### Domanda 9
**Quale refactoring è stato applicato al codice seguente?**  
- Replace Inheritance with Delegation  
- Extract Method  
- Replace Temp With Query  
- Remove Cloned Code  

### Domanda 10
**Quale delle seguenti opzioni è più indicata per un Project Manager che deve sviluppare un sistema SW medicale safety-critical con requisiti instabili?**  
- Applicare un metodo di sviluppo prescrittivo con molte milestone e code review frequenti  
- Applicare Extreme Programming  
- Utilizzare un metodo di sviluppo che bilancia agilità e disciplina  
- Seguire il metodo di sviluppo denominato Unified Process  

### Domanda 1
**Quali attività compongono il processo di Requirements Engineering (RE) e permettono la creazione e revisione del Requirements Document?**  
- Elicitation, Elaboration, Specification, Testing, Documentation  
- Extraction, Elaboration, Specification, Validation, Documentation  
- Elicitation, Analysis, Specification, Validation, Management  
- Extraction, Analysis, Specification, Testing, Management  

### Domanda 2
**Quale relazione va definita tra i casi d’uso nel diagramma UML?**  
- Estensione  
- Generalizzazione  
- Realizzazione  
- Utilizzo  

### Domanda 3
**Quale tra le seguenti affermazioni relative al Sequence diagram UML mostrato in figura è corretta?**  
- Il messaggio “doPayment” ricevuto da Payment System dovrebbe partire da una lifeline esplicita; la notazione con il cerchio nero non è permessa in UML  
- Il diagramma non mostra i numeri sequenziali sopra le frecce, quindi non è sintatticamente corretto in UML  
- I partecipanti sono anonimi e, non essendo specificate istanze, non è possibile effettuare alcun self-message come “completePayment”  
- La classe Bank System fornisce un metodo chiamato checkAvailability con due parametri e ritorna un valore (probabilmente booleano)  

### Domanda 4
**Gli Screen mockup sono di solito utilizzati dagli Analisti SW:**  
- Nei requisiti SW per specificare quale sarà l’effettiva GUI del sistema una volta realizzato  
- Negli use case diagram per chiarire il ruolo degli attori  
- Negli use case per chiarire alcuni passi mediante un “abbozzo” di GUI  
- Nei requisiti per sottolineare la differenza tra requisiti utente e di sistema  

### Domanda 5
**Quale stile architetturale è più adatto per implementare un sistema SW gestionale con interfaccia grafica e smistamento delle operazioni?**  
- Pipe and filter  
- Stratificato (Layered)  
- Manager model  
- Client-server  

### Domanda 6
**Se dovessi consigliare un libro di Ingegneria del SW generale e introduttivo, quale autore suggeriresti?**  
- I. Sommerville  
- E. Gamma  
- M. Fowler  
- K. Beck  

### Domanda 7
**Dato il class diagram etichettato con X in figura, quale tra gli altri class diagram è il più adeguato a rappresentare X preservandone le proprietà?**  
- Il class diagram D  
- Il class diagram C  
- Il class diagram A  
- Il class diagram B  

### Domanda 8
**Quale macro-categoria di tecniche di testing è considerata la più efficace in ambito industriale?**  
- Non esiste una risposta assoluta, poiché dipende da vari fattori. In generale, le tecniche di testing sono complementari, ma uno studio suggerisce che il testing funzionale con tester esperti individua più fault rispetto al testing strutturale  
- Il black box testing perché può essere usato con qualsiasi tipo di sistema, indipendentemente da tecnologia/piattaforma/linguaggio  
- Il black box testing perché può essere usato per Unit, Integration e System testing  
- Il white-box testing perché permette di analizzare il codice sorgente e individuare percorsi non coperti, condizioni non testate e potenziali vulnerabilità  

### Domanda 9
**Quale design pattern è implementato dal seguente codice Java?**  
- Template Method  
- Adapter  
- Observer  
- Facade  

### Domanda 10
**Quale modello di processo di sviluppo software utilizzeresti per progettare un’applicazione Web To-Do List collaborativa in tempo reale con soli tre sviluppatori?**  
- Modello di sviluppo a spirale  
- Unified Process  
- Test Driven Development (TDD)  
- Extreme Programming  

### Domanda 1
**Quali tra i seguenti motivi di insuccesso di un progetto software si trovano nelle ultime posizioni nella lista stilata nello Standish Group?**  
- Carenze di risorse  
- Cambiamento di requisiti e specifiche  
- Incompletezza dei requisiti e mancato coinvolgimento degli utenti durante la fase di analisi  
- Incompetenza tecnologica del Team informatico (Analisti, progettisti e sviluppatori)  

### Domanda 2
**Che diagramma UML è il seguente?**  
- Object Diagram  
- Communication Diagram  
- Class Diagram  
- Sequence Diagram  

### Domanda 3
**Secondo Fred Brooks, qual è la sfida più difficile durante lo sviluppo di un sistema software?**  
- Progettare un design Platform Independent adatto al problema da risolvere  
- Correggere i difetti durante la fase di Testing  
- Decidere cosa realizzare  
- Scegliere la tecnologia (piattaforma, linguaggio, frameworks) più adatta per lo sviluppo  

### Domanda 4
**Che cosa rappresenta il concetto di debito tecnico nello sviluppo software?**  
- Un costo monetario aggiuntivo per utilizzare strumenti di terze parti  
- Una situazione in cui il codice ha problemi strutturali che potrebbero causare costi futuri per correzioni e manutenzione  
- L'accumulo di errori runtime durante l'integrazione di più moduli  
- Una tecnica di sviluppo per simulare sistemi finanziari nei software  

### Domanda 5
**Che cosa è un mock object o uno stub nel contesto del software testing?**  
- Un oggetto reale utilizzato per eseguire test di integrazione, che interagisce con i componenti reali senza simulazioni  
- Un oggetto simulato che verifica le interazioni tra componenti, imitando il comportamento di un componente reale per testarne le chiamate e risposte  
- Un oggetto che sostituisce un componente reale durante i test mediante risultati randomici utili a testare il sistema in isolamento  
- Un componente che sostituisce un modulo reale per simulare guasti hardware durante i test di resilienza  

### Domanda 6
**Quale tra le seguenti affermazioni relativamente al framework JUnit 5 è vera?**  
- Nativamente non distingue i fallimenti nell'esecuzione dei test dovuti a asserzioni fallite da quelli dovuti a eccezioni sollevate  
- Viene usato principalmente in ambito di testing di sistema e di interfaccia utente  
- Utilizza l'annotazione @BeforeEach per indicare un metodo chiamato un'unica volta a inizio esecuzione di una test suite  
- Supporta varie tipologie di asserzione, a seconda del tipo di dato, incluse asserzioni temporali  

### Domanda 7
**Quale code smell è presente nella classe Invoice rappresentata a lato?**  
- Dotty indirection  
- Methodic Monotony  
- Data class  
- Message chains  

### Domanda 8
**Quale dei seguenti Design Pattern viene utilizzato all’interno del Pattern architetturale MVC?**  
- Observer design pattern  
- Factory design pattern  
- State design pattern  
- Strategy design pattern  

### Domanda 9
**Cosa possiamo dire della seguente classe Car Java dal punto di vista dei principi di design?**  
- La classe ha LCOM uguale a zero  
- La classe segue correttamente il principio di responsabilità unica  
- La classe presenta una bassa coesione tra i suoi metodi  
- La classe è coesa  

### Domanda 10
**Nel seguente Use Case Diagram UML quale stereotipo metteresti sulla freccia che collega lo Use Case ATM Transaction e Customer Authentication?**  
- <<extend>>  
- <<generalize>>  
- <<use>>  
- <<include>>  

### Domanda 1
**Quali tra i seguenti fattori sono considerati tra i principali rischi durante lo sviluppo di un progetto software?**  
- Cambiamenti frequenti nella tecnologia adottata  
- Mancanza di una visione chiara dei requisiti da parte del cliente  
- Sovrastima delle capacità del team  
- Eccessiva documentazione senza automatismi di aggiornamento  

### Domanda 2
**In quale diagramma UML può essere usato il seguente simbolo?**  
- Activity Diagram  
- Communication Diagram  
- Component Diagram  
- Sequence Diagram  

### Domanda 3
**Secondo Fred Brooks, quale aspetto tra i seguenti rappresenta il "silver bullet" nello sviluppo software?**  
- L'adozione di una metodologia agile su larga scala efficace (es. DevOps)  
- L'uso di strumenti CASE avanzati  
- Non esiste il "silver bullet" nello sviluppo software  
- La completa automazione del testing  

### Domanda 4
**Che cosa rappresenta il concetto di debito tecnico nello sviluppo software?**  
- Un costo monetario aggiuntivo per utilizzare strumenti di terze parti  
- Una situazione in cui il codice ha problemi strutturali che potrebbero causare costi futuri per correzioni e manutenzione  
- L'accumulo di errori runtime durante l'integrazione di più moduli  
- Una tecnica di sviluppo per simulare sistemi finanziari nei software  

### Domanda 5
**Cosa si intende con code smell?**  
- Un errore del codice che ne impedisce la compilazione o l'esecuzione  
- Un'indicazione di una caratteristica nascosta del codice che potrebbe causare futuri problemi  
- Un design pattern specifico per la gestione della leggibilità e manutenibilità del codice  
- Una funzionalità presente nei principali debugger per trovare problemi nel codice  

### Domanda 6
**Quale tra le seguenti affermazioni relativamente al framework JUnit 5 è falsa?**  
- Consente l'uso di annotazioni per personalizzare i test  
- Supporta test parametrizzati per verificare scenari multipli  
- Richiede necessariamente l'estensione della classe TestCase  
- Permette di rilevare errori a runtime oltre a problemi su asserzioni  

### Domanda 7
**Quale code smell NON è presente nella classe AbstractCollection rappresentata a lato?**  
- Long Method  
- Duplicated code  
- Too many If statements  
- Message chains  

### Domanda 8
**Nel contesto del pattern architetturale MVC (Model-View-Controller), quale delle seguenti affermazioni descrive meglio la responsabilità del Controller?**  
- Si occupa di aggiornare il Model e la View  
- Si occupa di visualizzare i dati provenienti dal Model  
- Si occupa di gestire i dati del Model e aggiornarli nel Database  
- Si occupa di controllare la visualizzazione di widget e dati nella View  

### Domanda 9
**Cosa possiamo dire delle due classi Engine e Car nella figura mostrata a destra?**  
- Le classi Engine e Car non sono coese  
- L’incapsulamento non è corretto  
- Esiste una dipendenza che parte dalla classe Engine verso la classe Car  
- Le classi Engine e Car sono fortemente accoppiate  

### Domanda 10
**Quale tra le seguenti relazioni tra due use case UC1 e UC2 rappresenta il concetto "UC2 utilizza UC1 per il suo completamento"?**  
- A  
- B  
- C  
- D  

### Domanda 1
**In che modo possiamo esprimere i vincoli (cioè le constraint) in un diagramma delle classi UML?**  
- Le specifiche UML non danno informazioni in merito; l'unica regola è indicare i vincoli tra parentesi tonde  
- Indicandoli tra parentesi graffe attraverso il linguaggio naturale, un linguaggio di programmazione o OCL (Object Constraint Language)  
- Non serve un modo esplicito per aggiungere vincoli aggiuntivi: tutti i vincoli si possono esprimere mediante associazioni, attributi e generalizzazione  
- Unicamente utilizzando il linguaggio OCL (Object Constraint Language)  

### Domanda 2
**Cosa indica un alto Fan-out tra moduli (o componenti) di un sistema software?**  
- Indica buon riuso  
- Indica eccessiva dipendenza e che il modulo andrebbe decomposto  
- Indica alto accoppiamento (Content coupling)  
- Indica violazione dell'Information Hiding  

### Domanda 3
**Per quale attività/task NON è particolarmente indicato il Design by Contract proposto da B. Meyer?**  
- Per documentare cosa fa una classe/componente  
- Per effettuare il refactoring di una classe  
- In fase di Debugging, per trovare un malfunzionamento nel software  
- Per la generazione di casi di test blackbox  

### Domanda 4
**Nel contesto dello stile architetturale a micro-servizi (micro-service), quale è la funzione dell'API Gateway?**  
- Permette la comunicazione punto a punto dei vari micro-servizi che costituiscono il sistema SW  
- Permette la comunicazione tra i vari micro-servizi e il DB centrale del sistema SW  
- Agisce come un Observer, che vigila sul corretto funzionamento del sistema SW  
- Agisce come un Facade, esponendo un'interfaccia verso il client e gestendo le chiamate ai vari micro-servizi  

### Domanda 5
**Quale tra le seguenti affermazioni in merito al software testing è errata/falsa?**  
- La bontà di una test suite si misura in base al numero di fault trovati nel codice che essa testa  
- Il criterio di copertura All Paths coverage può generare cammini infeasible  
- Il black box testing è una tecnica di testing particolarmente indicata per testare il software a livello di sistema (System level)  
- Applicando Equivalence Partitioning nel modo classico su un range di valori [0, 100] si ottengono tre classi di equivalenza  

### Domanda 6
**Di solito usare componenti SW a grana grossa (Large-grain) in un sistema SW:**  
- Riduce la performance  
- Migliora performance e maintainability  
- Migliora la maintainability  
- Migliora la performance ma riduce la maintainability  

### Domanda 7
**Quale tra le seguenti relazioni tra due use case UC1 e UC2 rappresenta il concetto "UC2 utilizza UC1 per il suo completamento"?**  
- La relazione A  
- La relazione B  
- La relazione C  
- La relazione D  

### Domanda 8
**Che cosa è l'OMG?**  
- Un consorzio di aziende (tra cui Microsoft, Digital, HP, NCR, SUN, OSF) avente l'obiettivo di creare standard come CORBA, UML e XMI  
- Un'azienda statunitense conosciuta per i report riguardanti i progetti (project management)  
- Una delle più importanti aziende d'informatica del mondo, tra le maggiori produttrici di software per fatturato e capitalizzazione azionaria  
- Un consorzio di aziende che ha creato diversi standard nell'ambito del software testing, tra cui ISO/IEC/IEEE 29119  

### Domanda 9
**Quale design pattern è stato applicato al codice di sinistra per ottenere quello di destra?**  
- Template Method  
- Adapter  
- Facade  
- Observer  

### Domanda 10
**Quale delle seguenti opzioni è più indicata per un Project Manager che deve sviluppare un sistema SW medicale safety-critical con requisiti instabili?**  
- Applicare un metodo di sviluppo prescrittivo con molte milestone e code review frequenti  
- Applicare Extreme Programming  
- Utilizzare un metodo di sviluppo che bilancia agilità e disciplina  
- Seguire il metodo di sviluppo denominato Unified Process  

### Domanda 1
**Quali tra i seguenti motivi di insuccesso di un progetto software si trovano nelle primissime posizioni nella lista stilata nello Standish Group?**  
- Incompetenza tecnologica del Team informatico (Analisti, progettisti e sviluppatori)  
- Carenze di risorse e carenza di gestione del settore IT  
- Incompletezza dei requisiti e mancato coinvolgimento degli utenti durante la fase di analisi  
- Carenza di pianificazione  

### Domanda 2
**Che diagramma UML è il seguente?**  
- Communication Diagram  
- Object Diagram  
- Class Diagram  
- Sequence diagram  

### Domanda 3
**In Extreme Programming che indicatore viene solitamente usato come indice di progresso nella codifica di un SW?**  
- La percentuale di User stories implementate  
- La percentuale di casi di test di unità (Unit test) superati (sul totale)  
- Non viene usato nessun indicatore. Essendo un metodo agile gli indicatori non si utilizzano  
- La percentuale di casi di test di accettazione superati/passati (sul totale)  

### Domanda 4
**Cosa vuole dire prioritizzazione dei requisiti?**  
- Scrivere dei casi di test a partire dai requisiti  
- Decidere per ogni requisito il valore corrispettivo in points e lasciare all’utente la scelta dei requisiti da includere nella release successiva considerando un valore totale di points massimo che il Team di sviluppo potrà implementare in uno sprint  
- Dare un ordine ai requisiti per decidere quali implementare (ad esempio suddividendoli in necessari, desiderabili e possibili)  
- Analizzare i requisiti per stabilirne la fattibilità e la correttezza  

### Domanda 5
**Quale refactoring visto a lezione si potrebbe applicare alla seguente porzione di codice?**  
- Split Temporary Variable  
- Replace Temp with Query  
- Remove Parameter  
- Replace Inheritance with Delegation  

### Domanda 6
**In qualità di Project Manager ed avendo a disposizione un budget molto cospicuo, che ragionamento faresti prima di rilasciare un software safety-critical per la somministrazione di insulina a pazienti diabetici?**  
- È sufficiente applicare software testing utilizzando il branch coverage perché questo criterio è richiesto dallo standard ANSI/IEEE Std 1008-1987 in casi di sistemi critici e complessi  
- Dato che il sistema software è safety-critical è preferibile applicare il criterio di testing denominato path-coverage. Per maggiore tranquillità è preferibile la variante completa del criterio  
- Oltre al software testing (White e Black-box) è meglio prendere in considerazione anche altre tecniche di verifica formale. Ad esempio model-checking e usare tool di analisi statica del codice (come ad esempio STAN4J)  
- È necessario, partendo dalle specifiche, sviluppare un nuovo prototipo del sistema SW con un linguaggio di altissimo livello da utilizzare per verificare i risultati del sistema che si vuole rilasciare  

### Domanda 7
**Quante sono le interfacce esplicite fornite nel seguente Component diagram UML che si riferisce ad un sistema di gestione ordini?**  
- Otto  
- Quattro  
- Tre  
- Sette  

### Domanda 8
**Nell’ipotesi di realizzare un sistema di broadcasting quale dei seguenti design pattern prenderesti in considerazione?**  
- Observer design pattern  
- Facade design Pattern  
- State design Pattern  
- Template method design pattern  

### Domanda 9
**Il seguente requisito software “Il sistema bancario che sarà implementato dovrà permettere la consultazione del saldo” è un requisito:**  
- Funzionale  
- Non funzionale  
- Implementativo  
- Di sistema  

### Domanda 10
**Quale delle seguenti affermazioni relative al processo di sviluppo UP (Unified Process) è la più corretta?**  
- Lo Unified Process parte dall'alto cioè dalla visione d'insieme del sistema (Top-down), pone l'architettura al centro dello sviluppo (architecture centric) e non considera il concetto di rischio (No risk-driven)  
- Lo Unified Process parte dal basso, cioè dai singoli moduli costituenti il sistema (Bottom-up), pone l'architettura al centro dello sviluppo (architecture centric), è iterativo (iterative) ma non incrementale (No incremental)  
- Lo Unified Process è un metodo di sviluppo agile (lightweight) che concentra buona parte delle sue attività sulla fase di implementazione (code centric)  
- Lo Unified Process è indirizzato dalla visione dell'utente (Use-case driven), pone l'architettura al centro dello sviluppo (architecture centric), è iterativo (iterative) e incrementale (incremental)  

### Domanda 1
**Il V-model è un modello di processo di sviluppo:**  
- Evolutivo  
- Agile  
- Che dà particolare enfasi alle attività di testing e manutenzione  
- Incrementale  

### Domanda 2
**A quale dei seguenti stili architetturali corrisponde un'architettura software che può essere schematizzata come in figura?**  
- Repository  
- Pipeline  
- Broadcast  
- Stratificato  

### Domanda 3
**Nell’ambito del design by contract:**  
- È obbligatorio specificare un’invariante per ogni classe  
- Per alcune classi si può non specificare invariante, ma in tal caso è obbligatorio specificare pre e post-condizioni per ogni metodo della classe  
- Per alcune classi si può non specificare invariante e questo corrisponde a specificare l’invariante TRUE  
- Per alcune classi si può non specificare invariante, ma in tal caso non si potranno specificare pre e post-condizioni per alcun metodo della classe  

### Domanda 4
**Perché sia facilmente mantenibile una componente software dovrebbe essere caratterizzata da:**  
- Alto livello di coesione, alto grado di accoppiamento  
- Alto livello di coesione, basso grado di accoppiamento  
- Basso livello di coesione, alto grado di accoppiamento  
- I livelli di coesione e accoppiamento non hanno legami con la facilità di manutenzione  

### Domanda 5
**Nella definizione dei mapping in un ORM quale Hibernate, per quanto riguarda le associazioni tra le classi:**  
- Si tiene conto solo della molteplicità delle associazioni  
- Si tiene conto della molteplicità e della direzionalità delle associazioni  
- Si tiene conto solo della direzionalità delle associazioni  
- La definizione del mapping non dipende né dalla molteplicità né dalla direzionalità delle associazioni  

### Domanda 6
**Quale tra questi è un principio dei metodi agili?**  
- La collaborazione con il cliente è più importante della negoziazione contrattuale  
- Una documentazione omnicomprensiva è più importante del codice funzionante  
- Il contratto tra le parti è più importante della collaborazione con il cliente  
- Seguire un piano dettagliato (progetto) è più importante che rispondere ai cambiamenti  

### Domanda 7
**Quale tra le seguenti affermazioni è vera in riferimento al testing di sistema (System testing)?**  
- Si occupa solo di aspetti di correttezza  
- Di solito viene eseguito subito dopo il testing di unità  
- Di solito viene eseguito con approcci white-box  
- Viene eseguito nella fase di integrazione di sistema  

### Domanda 8
**Il meta-modello UML:**  
- È un linguaggio, un insieme di elementi e regole, di specifica formale per sistemi software  
- Definisce le caratteristiche e le relazioni esistenti tra i diversi elementi (es. Classi, attributi) di UML  
- È un insieme di diagrammi derivati dal meta-modello stesso che descrivono aspetti diversi dello stesso sistema software  
- È la sintassi grafica del linguaggio UML  

### Domanda 9
**Quando si parla di "documentazione di un sistema software" si intende/intendono:**  
- I commenti messi all’interno del codice per chiarirne il comportamento  
- I documenti relativi alla fase di negoziazione contrattuale del sistema  
- L’insieme di documenti a corredo di un sistema software formati da requisiti, design e modelli in genere atti a documentare il sistema  
- I manuali utente  

### Domanda 10
**I tool di analisi statica del codice:**  
- Eseguono il codice e dalle tracce ricavano delle preziose informazioni che vengono mostrate all’utente sotto forma di diagrammi  
- Generano in automatico codice a partire dal modello di un sistema  
- Sono tool che senza eseguire il codice estraggono delle informazioni che aiutano l’utente nella sua analisi  
- Sostituiscono le code review (ovvero revisioni di codice da parte di umani) con lo scopo di identificare fault nel codice  

### Domanda 11
**Nel modello a spirale:**  
- È previsto l’uso di prototipi software solo di tipo throw-away  
- L’analisi dei rischi viene effettuata come prima attività, prima di intraprendere qualsiasi altra attività legata al progetto  
- La decisione se abbandonare o proseguire (go, no-go) il progetto viene riconsiderata più volte  
- L’interazione con il cliente è limitata alle fasi iniziali (raccolta dei requisiti) e finali (acceptance testing) del progetto  

### Domanda 12
**Quale delle seguenti affermazioni sull’attività di manutenzione di un sistema software è corretta?**  
- L’attività di manutenzione è generalmente trascurabile in termini di tempo e costo rispetto all’attività di progettazione e sviluppo precedente la consegna  
- La complessità dell’attività di manutenzione dipende in modo significativo solo dalla dimensione del sistema  
- La manutenzione degrada la struttura del software rendendo quindi più difficile la manutenzione successiva  
- La manutenzione correttiva (correzione degli errori) rappresenta la parte preponderante dell’attività di manutenzione svolta su un sistema  

### Domanda 13
**Relativamente ai Design Pattern quale delle seguenti affermazioni è vera?**  
- Nello State pattern lo stato viene assegnato un’unica volta e non è più modificabile  
- Il pattern Observer riduce l’accoppiamento tra osservatori e osservato  
- Il pattern Abstract factory viene tipicamente utilizzato per creare una classe che collabora con classi non correlate, o che non si conoscono ancora  
- Il pattern Visitor viene principalmente utilizzato per rappresentare gerarchie di tutto-parti (strutture ad albero)  

### Domanda 14
**Relativamente al design by contract quale delle seguenti affermazioni è vera?**  
- Le precondizioni rappresentano obblighi per chi utilizza il metodo e benefici per chi lo fornisce  
- Una sottoclasse può rafforzare ma non indebolire una precondizione  
- Una violazione di una postcondizione corrisponde a un “bug” nella classe client  
- L’invariante di una classe include automaticamente in OR (disgiunzione) le invarianti di tutte le sue superclassi  

### Domanda 15
**La serializzazione di un oggetto:**  
- Indica il processo per linearizzare lo stato di un oggetto in modo da poterlo salvare su un supporto di memorizzazione o trasmetterlo su una connessione di rete  
- Indica la memorizzazione dello stato di un oggetto in formato necessariamente binario su disco  
- Non permette in nessun caso di poter poi ricostruire lo stato di un oggetto serializzato per una successiva elaborazione da parte del programma  
- Se effettuata in formato XML non contiene informazioni sufficienti a poter poi ricostruire lo stato di un oggetto serializzato per una successiva elaborazione da parte del programma  

### Domanda 16
**Quali delle seguenti affermazioni è vera?**  
- Operazione e metodo di una classe sono sinonimi  
- L’esecuzione di un’operazione di un oggetto non può provocare una variazione di stato dello stesso  
- Un’operazione è una specifica di un comportamento, mentre un’implementazione di quel comportamento è detta metodo  
- Lo stato di un oggetto non ne influenza il comportamento  

### Domanda 17
**Come viene rappresentata una dipendenza in un diagramma UML?**  
- Con una "freccia" tratteggiata che parte dall’elemento cliente e arriva all’elemento fornitore  
- Mediante una linea unita tra cliente e fornitore  
- Con una "freccia" tratteggiata che parte dall’elemento fornitore e arriva all’elemento cliente  
- Nello stesso modo delle associazioni  

### Domanda 18
**Cosa è il pair programming?**  
- Una pratica XP nella quale viene consigliato di scrivere i casi di test prima della codifica  
- Una pratica XP nella quale i programmatori lavorano a coppie. Di solito il più esperto scrive il codice  
- Una tecnica di design nella quale vengono usati dei foglietti adesivi su cui vengono scritti il nome delle classi, il loro scopo e le collaborazioni tra classi  
- Una pratica XP nella quale i programmatori lavorano a coppie. Di solito il meno esperto scrive il codice  

### Domanda 19
**Per quale motivo il criterio di testing “all paths coverage” viene utilizzato raramente nella pratica industriale?**  
- Perché è difficile coprire ogni combinazione delle condizioni atomiche di un sistema reale  
- Perché la presenza dei loop rende il numero dei cammini possibili (e quindi da coprire) molto grande, rendendo la fase di test molto costosa  
- Perché la copertura minima richiesta dallo "IEEE unit test standard" è lo statement coverage  
- Perché alcuni cammini potrebbero essere "infeasible"  

### Domanda 20
**Nel contesto della fase di "low level design", nella quale vengono identificate classi, relazioni ed operazioni del sistema da costruire, considerare la seguente proporzione e stabilire il valore del termine incognito:**  
**Nomi e frasi nominali : Classi = X : Operazioni**  
- Associazioni  
- Parametri  
- Aggettivi qualificativi, positivi, comparativi  
- Verbi e frasi verbali  

### Domanda 21
**Cosa si intende con stakeholder di un sistema?**  
- Chiunque è interessato al sistema  
- Un attore (primario o secondario) del sistema  
- Il responsabile dello sviluppo del sistema  
- Il committente dello sviluppo del sistema  

### Domanda 22
**Quale tra i seguenti può essere individuato come un difetto del modello a cascata?**  
- Pospone l’implementazione a dopo che si sono ben compresi i requisiti del sistema  
- Rende difficoltosa la pianificazione e la gestione del progetto  
- La struttura lineare delle fasi è troppo rigida perché non consente di tenere conto del feedback da fasi successive  
- Non dà alcuna indicazione su come ogni fase trasforma l’input in output  

### Domanda 23
**In una architettura client-server di tipo two-tiers fat-client, la logica applicativa è:**  
- Nello strato client  
- Nello strato server  
- In un apposito strato detto application server  
- In nessuno degli strati precedenti  

### Domanda 24
**Quale tra i seguenti Design Pattern viene tipicamente utilizzato per creare una classe che collabora con classi non correlate, o che non si conoscono ancora?**  
- State  
- Adapter  
- Observer  
- Visitor  

### Domanda 25
**L’alta coesione di un componente/classe:**  
- Fa riferimento alla sua dimensione in termini di righe di codice  
- Permette di comprendere e modificare meglio il componente/classe  
- È indice di complessità nella comunicazione con altri componenti/classi  
- È indice di una dipendenza troppo forte da altre componenti/classi  

### Domanda 26
**Quale vantaggio si ottiene a realizzare un “platform independent design”?**  
- Il design è riusabile se cambia la piattaforma sottostante  
- La fase di testing del sistema è più semplice  
- Il design è più comprensibile (understandability)  
- La fase di ridocumentazione è più semplice  

### Domanda 27
**Che cosa è un processo di sviluppo software?**  
- Un insieme di diagrammi che formano un modello. L’insieme dei modelli costituisce il sistema software finale  
- Un approccio iterativo ad-hoc usato solo da piccole imprese  
- Un insieme di tecniche e tool da applicare per ottenere un sistema software  
- Un insieme strutturato e organizzato di attività che si svolgono per ottenere un sistema software  

### Domanda 28
**Quale delle seguenti attività NON ricade usualmente nella fase di manutenzione del software?**  
- Aggiungere una nuova funzionalità o modificarne una esistente  
- Adattare il sistema software ad un nuovo sistema operativo (ad esempio Windows XP → Windows 7)  
- Modificare l’architettura del sistema  
- Rimediare ad errori ancora presenti dopo il delivery  

### Domanda 29
**Quale tra questi è un vantaggio del black box testing?**  
- L’automazione è più facile ed efficiente  
- Può essere usato con qualsiasi tipo di sistema software indipendentemente dalla tecnologia/linguaggio usato  
- Permette di sondare tutti i cammini di un programma  
- Rende più semplice la fase di debugging in quanto la segnalazione del malfunzionamento indica il punto del codice e i valori delle variabili per cui il malfunzionamento si è manifestato  

### Domanda 30
**In quale dei seguenti contesti è particolarmente adeguato utilizzare una metodologia agile come Extreme Programming?**  
- Il gruppo di sviluppo è costituito da molti sviluppatori (> 50) non molto esperti e i requisiti sono abbastanza stabili  
- Si hanno a disposizione dei requisiti precisi e stabili ma il customer è poco disponibile a chiarimenti in quanto molto occupato in attività di business  
- Il software da sviluppare è particolarmente critico (es. software per monitorare una centrale nucleare)  
- Il gruppo di sviluppo è costituito da pochi bravi sviluppatori, i requisiti cambiano velocemente e il software non è critico  

### Domanda 31
**Che problemi possono creare le componenti fortemente connesse (alto accoppiamento) in un’applicazione (ad esempio quelle trovate dal tool Stan4J e chiamate tangles)?**  
- Difficoltà nella fase di manutenzione  
- Inefficienza  
- Aumento del tempo di sviluppo  
- Classi troppo coese che creano problemi di comprensione del codice  

### Domanda 32
**In quali metodi di sviluppo gioca un ruolo fondamentale la fase di design?**  
- CRC e TDD  
- UML  
- Agili (es. Extreme programming)  
- Plan-driven  

### Domanda 33
**Perché si usa la "prioritizzazione" dei requisiti?**  
- Per avere un ordine alfanumerico dei requisiti  
- Per stabilire cosa includere in un incremento/release software  
- Per partizionare i requisiti funzionali da quelli non funzionali  
- Per permettere un’equa distribuzione del carico di lavoro agli sviluppatori  

### Domanda 34
**Quale dei seguenti diagrammi UML descrive il comportamento (behaviour)?**  
- Class e object diagrams  
- Package diagrams  
- Class e interaction diagrams  
- State, activity e interaction diagrams  

### Domanda 35
**Quale delle seguenti frasi è corretta?**  
- Errore, fault e failure sono sinonimi  
- Il testing esaustivo è spesso realizzabile nei casi reali  
- Lo scopo del software testing è mostrare la presenza di fault  
- Un fault in un programma porta inevitabilmente ad avere un failure  

### Domanda 36
**Nello sviluppo a fasi:**  
- Viene rilasciata un’unica release complessiva del sistema, sviluppata seguendo tutte le fasi previste dal ciclo di sviluppo software  
- Possono essere rilasciate diverse release, solo per correggere errori presenti nella prima release del sistema  
- Possono essere rilasciate diverse release, ognuna corrispondente a diversi ambienti di esecuzione del sistema  
- Vengono rilasciate varie release, ognuna delle quali aggiunge nuove funzionalità al sistema e/o estende o raffina funzionalità già presenti  

### Domanda 37
**Nei diagrammi dei casi d’uso, le relazioni di generalizzazione/specializzazione:**  
- Possono esistere sia tra attori che tra casi d’uso  
- Possono esistere solo tra attori  
- Possono esistere solo tra casi d’uso  
- Non possono esistere né tra attori né tra casi d’uso  

### Domanda 38
**Quale tra le proprietà di una componente misura (informalmente) la qualità della strutturazione dal punto di vista del raggruppamento delle funzioni?**  
- Complessità ciclomatica  
- Coesione  
- Coupling  
- Information hiding  

### Domanda 39
**Quale dei seguenti design pattern permette di fattorizzare il comportamento comune a vari algoritmi e di localizzarlo in una classe comune per evitare duplicazioni?**  
- Singleton  
- Command  
- Template method  
- Observer  

### Domanda 40
**Facendo riferimento al design by contract e al behavioral subtyping, considerate un’operazione `public void withdraw (double amount)` e le due precondizioni:
Pre1 = `amount > 0`  
Pre2 = `amount > 0 && getBalance() >= amount`  
Quale delle seguenti affermazioni è corretta?**
- È possibile che Pre1 sia la precondizione di withdraw in una classe e Pre2 lo sia in una sua sottoclasse  
- È possibile che Pre1 sia la precondizione di withdraw in una classe e Pre2 lo sia in una sua superclasse  
- Né a) né b)  
- Sia a) che b)  

### Domanda 1
**Perché sono stati proposti modelli del processo di sviluppo software?**  
- Perché il software è come qualsiasi altro prodotto manifatturiero  
- Per limitare i gradi di libertà degli sviluppatori  
- Per aumentare la produttività e migliorare la qualità del software prodotto  
- Per aumentare i gradi di libertà degli sviluppatori  

### Domanda 2
**Gli use case:**  
- Sono una tecnica visuale per esprimere requisiti funzionali e non funzionali di un sistema  
- Sono una tecnica Object-Oriented per esprimere requisiti funzionali di un sistema  
- Sono una tecnica testuale per esprimere requisiti funzionali di un sistema  
- Sono una tecnica testuale per esprimere requisiti funzionali e non funzionali di un sistema  

### Domanda 3
**Quale tra le seguenti NON è una delle proprietà che dovrebbero caratterizzare i requisiti?**  
- Verificabilità  
- Coesione  
- Consistenza  
- Realismo  

### Domanda 4
**Qual è il vantaggio principale di un sistema sviluppato in modo stratificato (layered)?**  
- Se cambia l’interfaccia di un livello, solo il livello sovrastante ne è influenzato  
- Si migliora la performance  
- Se cambia l’interfaccia di un livello, solo il livello sottostante ne è influenzato  
- Se cambia l’interfaccia di un livello, solo i livelli adiacenti (soprastante e sottostante) ne sono influenzati  

### Domanda 5
**Individuare quale tra i seguenti è lo stile architetturale più adatto per un news feeder che invia email di notifica agli utenti interessati della pubblicazione di notizie (su argomenti sui quali gli utenti abbiano espresso interesse):**  
- Pipe and Filter  
- Client-Server  
- Event-Based / Publish-Subscribe  
- Nessuno dei precedenti  

### Domanda 6
**Quale tra le seguenti notazioni è la più adatta per esprimere la logica di controllo?**  
- Sequence diagrams  
- Activity diagrams e/o pseudo-codice  
- Use cases e use case diagrams  
- TDD  

### Domanda 7
**Dato il seguente class diagram, quale costrutto OCL esprime il seguente vincolo: "nessuna Persona ha più di due veicoli"?**  
- Context Persona Inv: `self.parco -> size <= 2`  
- Context Veicolo Inv: `self.size <= 2`  
- Context Persona Inv: `self.parco -> size < 2`  
- Context Veicolo Inv: `self.size <= 2`  

### Domanda 8
**Quale tra le seguenti proprietà NON è valida?**  
- Branch coverage ⇒ Statement coverage  
- All path coverage ⇒ Multiple condition coverage  
- All path coverage ⇒ Statement coverage  
- Multiple condition coverage ⇒ Branch coverage  

### Domanda 9
**Cosa è un “code clone”?**  
- Un design pattern  
- Un tool di analisi statica  
- Una porzione di codice simile a un’altra (ed avente la stessa funzionalità) nello stesso programma  
- Una tecnica di refactoring che, date due porzioni simili di codice, le fattorizza (ovvero le sostituisce con chiamate a funzioni/procedure)  

### Domanda 10
**Quali sono state le cause indirette del peggiore incidente in 35 anni di storia sulla radioterapia (Therac-25)?**  
- Problemi manageriali  
- È stato utilizzato un componente di una versione precedente del sistema senza testarlo in modo approfondito  
- Non sono state applicate tecniche e linguaggi formali (es. Z) durante lo sviluppo  
- Software scritto e sviluppato male  

### Domanda 1
**Il refactoring è:**  
- Il processo che migliora la struttura interna di un sistema software e modifica alcuni requisiti funzionali del sistema  
- Il processo correttivo e di sviluppo che avviene dopo il rilascio del prodotto finale in un ambiente di produzione  
- Un procedimento utilizzato per individuare le carenze di correttezza, completezza e affidabilità delle componenti software in corso di sviluppo  
- Il processo che migliora la struttura interna di un sistema software senza alterarne il comportamento esterno (ovvero i requisiti funzionali rimangono gli stessi)  

### Domanda 2
**Un alto valore della metrica LCOM:**  
- Indica un alto livello di riuso della classe  
- Indica un alto coupling del sistema  
- Denota mancanza di coesione tra i metodi di una classe  
- Denota una buona coesione  

### Domanda 3
**In quale dei seguenti contesti è particolarmente adeguato utilizzare una metodologia agile (es. Extreme Programming)?**  
- Il gruppo di sviluppo è costituito da molti sviluppatori (> 50) non molto esperti e i requisiti sono abbastanza stabili  
- Il gruppo di sviluppo è costituito da pochi bravi sviluppatori, i requisiti sono abbastanza instabili e il software non è critico  
- Si hanno a disposizione dei requisiti precisi e stabili ma il customer è poco disponibile a chiarimenti in quanto molto occupato in attività di business  
- Il software da sviluppare è particolarmente critico (es. software per monitorare una centrale nucleare)  

### Domanda 4
**Quale è l’idea alla base del Model Driven Development (MDD)?**  
- Il modello che rappresenta il design di un sistema viene usato dai programmatori come base per sviluppare il codice  
- Il modello viene utilizzato per generare i casi di test che poi guideranno lo sviluppo del sistema  
- Il modello rappresenta una versione completa del sistema e viene tradotto manualmente dai programmatori in codice  
- Si esegue direttamente il modello mediante tool specifici oppure il codice viene generato in automatico a partire dal modello  

### Domanda 5
**Quale dei seguenti modelli del processo di sviluppo software deriva dal processo manifatturiero e ha forti analogie con lo sviluppo di altri sistemi?**  
- Modello a spirale  
- RUP  
- V-model  
- Waterfall model  

### Domanda 6
**Quale è il tipo di manutenzione cui è dedicata la percentuale più significativa dell’attività di manutenzione su un sistema?**  
- Correttiva (per “riparare” errori nel software)  
- Adattiva (per adattare il software a diversi ambienti)  
- Migliorativa (per aggiungere o modificare le funzionalità del sistema)  
- Preventiva (per prevenire problemi futuri)  

### Domanda 7
**In UML cosa indica il segno "-" (meno) posto davanti un attributo di una classe?**  
- L’attributo è privato, ovvero che l’utilizzo è consentito solo alla classe originale che lo contiene  
- L’attributo è pubblico, ovvero che l’utilizzo viene esteso a tutte le classi  
- L’attributo è protetto, ovvero che l’utilizzo è consentito solo alle classi del package  
- L’attributo è privato, ovvero che l’utilizzo è consentito solo alla classe originale che lo contiene e a tutte le sue sottoclassi  

### Domanda 8
**Come vengono chiamati i requisiti che riguardano la scelta di linguaggi, piattaforme, strumenti (tools) e tecniche d’implementazione?**  
- Requisiti funzionali  
- Requisiti tecnologici  
- Requisiti non funzionali  
- Requisiti desiderabili (SHOULD)  

### Domanda 9
**Una proprietà invariante di una classe:**  
- Non può mai essere falsificata  
- Può essere falsificata solo nel caso in cui tutte le pre-condizioni e post-condizioni associate a tutte le operazioni della classe siano soddisfatte  
- Può essere falsificata solo nel caso in cui tutte le pre-condizioni e post-condizioni associate a tutte le operazioni pubbliche della classe siano soddisfatte  
- Può essere falsificata durante l’esecuzione di un metodo, ma deve nuovamente valere prima che qualsiasi altro oggetto possa invocare un’altra operazione della classe  

### Domanda 10
**Quale dei seguenti design pattern utilizzereste quando operazioni diverse e non correlate devono essere eseguite sugli elementi di una struttura ad oggetti, e si vuole evitare di “sporcare” le loro classi con queste operazioni?**  
- Template Method  
- Adapter  
- Visitor  
- Facade  

### Domanda 1
**In quale dei seguenti contesti è particolarmente adeguato utilizzare una metodologia agile (es. Extreme Programming)?**  
- Il gruppo di sviluppo è costituito da molti sviluppatori (> 50) non molto esperti e i requisiti sono abbastanza stabili  
- Il gruppo di sviluppo è costituito da pochi bravi sviluppatori, i requisiti sono abbastanza instabili e il software non è critico  
- Si hanno a disposizione dei requisiti precisi e stabili ma il cliente è poco disponibile a chiarimenti in quanto molto occupato in attività di business  
- Il software da sviluppare è particolarmente critico (es. software per monitorare una centrale nucleare o software per una TAC)  

### Domanda 2
**Quale delle seguenti frasi è corretta/vera?**  
- Errore, fault e failure sono tutti sinonimi  
- Il software testing esaustivo viene spesso realizzato nei progetti reali  
- Lo scopo del software testing è mostrare la presenza di fault  
- Un fault in un programma porta inevitabilmente alla manifestazione di un failure (prima o poi)  

### Domanda 3
**La seguente Figura rappresenta l’architettura di un compilatore. A quale dei seguenti stili è conforme?**  
- È un’architettura eterogenea che unisce “pipe and filters” e repository  
- È un’architettura eterogenea che unisce “pipe and filters”, repository e broadcast model  
- È un pipe and filters  
- È un repository (la symbol table “gioca il ruolo di repository”)  

### Domanda 4
**Quale è l’idea che sta alla base del model driven development (MDD)?**  
- Il modello che rappresenta il design di un sistema viene usato dai programmatori solo come base per sviluppare il codice  
- Il modello viene utilizzato per generare i casi di test che poi guideranno lo sviluppo del sistema (test driven development)  
- Il modello rappresenta una versione completa del sistema e viene tradotto manualmente dai programmatori in codice  
- Il modello viene eseguito direttamente mediante tool specifici oppure il codice viene generato in automatico a partire dal modello  

### Domanda 5
**Il refactoring è:**  
- Il processo che migliora la struttura interna di un sistema software e modifica alcuni requisiti funzionali del sistema  
- Il processo correttivo e di sviluppo che avviene dopo il rilascio del prodotto finale in un ambiente di produzione  
- Un procedimento utilizzato per individuare le carenze di correttezza, completezza e affidabilità delle componenti software in corso di sviluppo  
- Il processo che migliora la struttura interna di un sistema software senza alterarne il comportamento esterno (ovvero i requisiti funzionali rimangono gli stessi)  

### Domanda 6
**Supponendo di dover testare le funzionalità principali di un’applicazione per smartphone che deve essere immessa sul mercato la prima volta e che è stata sviluppata in un linguaggio e con un framework (es. phoneGap) che non conosci (differente da Java), quale tipo di approccio di testing sceglieresti?**  
- Black box testing usando equivalence partitioning o l’approccio three steps  
- White box testing con criterio branch coverage  
- Testing di regressione  
- Testing di unità usando JUnit  

### Domanda 7
**Gli use case:**  
- Sono una tecnica prettamente visuale usata per esprimere i requisiti funzionali e non funzionali di un sistema  
- Sono una tecnica Object-Oriented usata per esprimere requisiti funzionali di un sistema  
- Sono una tecnica testuale usata per esprimere i requisiti funzionali di un sistema  
- Sono una tecnica testuale usata per esprimere requisiti funzionali e non funzionali di un sistema  

### Domanda 8
**Come vengono chiamati i requisiti che riguardano la scelta di linguaggi, piattaforme, strumenti (tools) e tecniche d’implementazione?**  
- Requisiti funzionali  
- Requisiti tecnologici  
- Requisiti non funzionali  
- Requisiti desiderabili  

### Domanda 9
**Quale dei seguenti design pattern permette di “fattorizzare” il comportamento comune a vari algoritmi e di localizzarlo in una classe comune per evitare duplicazioni?**  
- Singleton  
- Command  
- Template method  
- Observer  

### Domanda 10
**Quale è il tipo di manutenzione cui è dedicata la percentuale più significativa dell’attività di manutenzione su un sistema?**  
- Correttiva (per “riparare” errori nel software)  
- Adattiva (per adattare il software a diversi ambienti)  
- Migliorativa (per aggiungere o modificare le funzionalità del sistema)  
- Preventiva (per prevenire problemi futuri)  

### Domanda 1
**Quali tra questi fattori è considerato più difficile da controllare nello sviluppo di un sistema software di grosse dimensioni (cioè gruppi di lavoro composti da molte persone, tempi di sviluppo > 6 mesi e software costituito da milioni di LOCs)?**  
- Complessità intrinseca del problema che si deve affrontare  
- Rapida evoluzione e difficoltà nella scelta di linguaggi di programmazione, frameworks da utilizzare e tools per lo sviluppo (es. IDE)  
- Gestione del personale (es. creare gruppi di lavoro e sostituzione del personale) e allocazione delle risorse  
- Gestione dei costi e del bilancio  

### Domanda 2
**Per quale motivo i requisiti vengono prioritizzati?**  
- Per decidere cosa includere in un incremento; se stiamo utilizzando metodi di sviluppo software incrementali  
- Per stabilirne la fattibilità e la correttezza (es. per identificare i "missing requirements")  
- Per decidere come suddividere il lavoro di sviluppo tra i vari componenti del gruppo; se stiamo utilizzando una metodologia agile  
- Per decidere quali funzionalità della nostra applicazione testare per prime  

### Domanda 3
**La seguente Figura rappresenta un’istanza di un design pattern. Quale?**  
- Adapter  
- Visitor  
- Facade  
- Composite  

### Domanda 4
**Supponendo di dover testare nel dettaglio una componente software (es. classe) molto complessa (cioè con molti cicli e molte istruzioni condizionali) di un’applicazione per smartphone che è stata sviluppata in un linguaggio che conosci molto bene (es. Java) quale tipo di approccio di testing sceglieresti?**  
- Black box testing usando equivalence partitioning  
- White box testing con criterio branch coverage  
- Testing di regressione  
- White box testing con criterio path coverage completo (cioè senza trattare i loop in modo binario)  

### Domanda 5
**Quale tra i vari modelli di sviluppo è stato il primo ad introdurre il concetto di rischio nello sviluppo software?**  
- Modello a cascata  
- Unified Process (UP)  
- V-model  
- Modello a spirale  

### Domanda 6
**Qual è lo scopo degli oggetti DAO o layer di persistenza?**  
- Sostituire l’utilizzo di connettori a basi di dati quali ad esempio JDBC  
- Incapsulare in un livello software la comunicazione tra l’applicazione e il DBMS  
- Disaccoppiare la "presentation logic" dalla "business logic"  
- Generare automaticamente il codice di accesso ai dati a partire dal relativo diagramma ER  

### Domanda 7
**Nel contesto del design architetturale di un sistema software quale delle seguenti frasi è falsa?**  
- Le componenti "large-grain" migliorano la performance ma riducono la maintainability  
- Dati ridondanti migliorano la availability ma peggiorano la safety  
- Usare un’architettura a livelli aumenta le comunicazioni tra componenti e così degrada le prestazioni  
- Usare un’architettura a livelli con le risorse critiche nei livelli più interni peggiora la safety  

### Domanda 8
**Che tipo di diagramma UML è rappresentato nella figura?**  
- State diagram  
- Class diagram  
- Object diagram  
- Non è un diagramma UML  

### Domanda 9
**Che cosa è un code smell?**  
- Un “indicatore” che qualcosa nel codice non va bene. Lo sviluppatore deciderà a posteriori se intervenire o no  
- Una “certezza” che qualcosa nel codice non va bene. Lo sviluppatore dovrà intervenire per sistemare il problema  
- Un sinonimo di “code clone”  
- Un errore che necessariamente si manifesta durante l’esecuzione del software  

### Domanda 10
**Come può essere catalogata un’operazione di refactoring di un sistema software che ha l’obiettivo di rendere più coesi (e quindi più mantenibili) alcuni moduli?**  
- Manutenzione correttiva  
- Manutenzione preventiva  
- Manutenzione migliorativa
- Manuntenzione adattiva

### Domanda 1
**Che cosa è il re-engineering?**  
- Processo che mira a produrre una vista del codice "alternativa" utile per understanding (ad esempio un flowchart)  
- Una trasformazione di codice mal-strutturato in codice ben-strutturato  
- Un’operazione che permette di ricavare il design o le specifiche di un sistema a partire dal codice  
- Un’operazione che sostanzialmente consiste di tre step: 1) reverse engineering, 2) modifica delle specifiche e design, 3) forward engineering (per creare un nuovo sistema basato sulle specifiche e design rivisitati)  

### Domanda 2
**Nei metodi agili cosa si intende per “Tacit/implicit knowledge”?**  
- Conoscenza nella testa di chi lavora (sviluppatori) piuttosto che nella documentazione che accompagna il codice  
- Gli sviluppatori devono lavorare assieme agli utenti che devono essere presenti e disponibili in modo da comprendere meglio il dominio ed arricchire la propria conoscenza di dominio e sistema  
- La conoscenza del dominio viene condivisa a distanza tra gli sviluppatori mediante strumenti collaborativi tipo wiki  
- Conoscenza riportata nei documenti testuali piuttosto che nella testa di chi lavora (sviluppatori)  

### Domanda 3
**Nel seguente diagramma UML è stato instanziato un design pattern. Quale?**  
- Adapter  
- Visitor  
- State  
- Composite  

### Domanda 4
**Nel contesto del software testing quando si parla di power di un criterio di test quale delle seguenti affermazioni è vera?**  
- Più è alta la power del criterio di test scelto e più si riduce la size (dimensione) della test suite  
- Più è alta la power del criterio di test scelto e più è facile che la test suite generata trovi dei fault nell’applicazione che viene testata  
- Più è alta la power del criterio di test scelto e più diminuiscono i costi di produzione della test suite  
- Più è alta la power del criterio di test scelto e più è facile produrre i casi di test  

### Domanda 5
**Se durante la fase di design di un software per un particolare dominio ci si accorge che tra i vari diagrammi UML non ne esiste uno adatto cosa è consigliabile fare?**  
- Non è possibile che accada perché l’insieme dei diagrammi UML è pensato per essere esaustivo  
- Proporre all’OMG una modifica del meta-modello in modo tale che incorpori un nuovo diagramma adatto allo scopo  
- Si può scegliere tra: estendere UML tramite il concetto di profilo oppure usare dei diagrammi non UML  
- Occorre utilizzare un altro linguaggio di modellazione (ad esempio OMT o reti di Petri) che contiene un diagramma adatto allo scopo  

### Domanda 6
**I vantaggi principali offerti da un persistence framework quale Hibernate sono:**  
- Possibilità di accedere a basi di dati legacy mal progettate  
- Accoppiamento diretto tra applicazione e DB (chi sviluppa l’applicazione deve conoscere bene i dettagli del DB)  
- Incremento delle prestazioni  
- Facilità nel cambiare la corrispondenza tra oggetti e DB, facilità di riuso e indipendenza dallo specifico DBMS  

### Domanda 7
**Quale è l’idea alla base del model driven development (MDD)?**  
- Si esegue direttamente il modello mediante tool specifici oppure il codice viene generato in automatico a partire dal modello  
- Il modello viene utilizzato per generare i casi di test che poi guideranno lo sviluppo del sistema  
- Il modello rappresenta una versione completa del sistema e viene tradotto manualmente dai programmatori in codice  
- Il modello che rappresenta il design di un sistema viene usato dai programmatori come base per sviluppare il codice  

### Domanda 8
**Che problemi possono creare le componenti fortemente connesse (alto accoppiamento) in un’applicazione (ad esempio quelle trovate dal tool Stan4J e chiamate tangles)?**  
- Rendono più complessa l’analisi statica e dinamica del codice eseguita con strumenti automatici  
- Rendono più complesse le modifiche del codice, la fase di testing e il riuso  
- Rendono il sistema più inefficiente in termini di memoria e tempo  
- Hanno un impatto negativo nella fase di sviluppo dell’applicazione  

### Domanda 9
**Gli use case:**  
- Sono una tecnica visuale usata per esprimere i requisiti funzionali di un sistema  
- Sono una tecnica prettamente OO che serve per esprimere i requisiti non funzionali di un sistema  
- Sono una tecnica testuale usata per esprimere i requisiti funzionali di un sistema  
- Sono una tecnica testuale usata per esprimere sia i requisiti funzionali che quelli non funzionali di un sistema  

### Domanda 10
**Nel contesto del design by contract una pre-condizione forte (cioè restrittiva) è:**  
- Una buona notizia per cliente e fornitore  
- Una cattiva notizia per il fornitore, che deve garantire qualcosa di più  
- Una buona notizia per il fornitore, che ha la responsabilità di rispettare il contratto in meno casi  
- Una buona notizia per il cliente, a cui viene fornito un servizio più "impegnativo"  

### Domanda 1
**Quale figura professionale IT si occupa di stimare i costi e far sì che il progetto rispetti i tempi e i costi?**  
- Product Manager  
- Service Manager  
- Chief Executive Officer (CEO)  
- Project Manager  

### Domanda 2
**Dovendo usare un'operazione sviluppata da altri sviluppatori della stessa azienda, i controlli da inserire nel proprio codice devono essere:**  
- Il più possibile, non si può sapere quando "fidarsi" del codice (Melius abundare quam deficere)  
- Concordati tra chi sviluppa l’operazione e chi la usa, è importante che sia chiaro chi deve essere responsabile di effettuare il controllo  
- Il minimo indispensabile, per evitare la duplicazione di controlli. Troppi controlli riducono le prestazioni del sistema  
- Metà a carico del produttore dell’operazione e metà a carico del cliente dell’operazione  

### Domanda 3
**La seguente figura rappresenta un'istanza di uno stile architetturale. Quale?**  
- Pipe and Filter  
- Call-Return  
- Client-Server  
- Object-Oriented  

### Domanda 4
**Come possiamo calcolare la “bontà” (adeguatezza) di una test suite?**  
- Derivandola dalla Power. Più è alta la power, maggiore è l'adeguatezza  
- Misurando la copertura della test suite rispetto al SUT (System Under Test)  
- Dal numero di fault trovati  
- Dal numero di failure trovati  

### Domanda 5
**Il modello Waterfall (a cascata):**  
- Non ha pregi ma solo difetti e per questo motivo non viene utilizzato nell’industria  
- È l’evoluzione diretta del V-model  
- Ha pregi e difetti. Tra i pregi: è lineare, rigido, monolitico. Inoltre non esiste feedback tra le varie fasi, non esiste parallelismo che rischia di confondere gli sviluppatori ed esiste un’unica e certa data di consegna  
- Ha pregi e difetti. Un pregio è che pospone l’implementazione dopo avere capito i bisogni del cliente (obbiettivi)  

### Domanda 6
**Qual è lo scopo degli oggetti DAO o layer di persistenza?**  
- Sostituire l’utilizzo di connettori a basi di dati quali ad esempio JDBC  
- Incapsulare in un livello software la comunicazione tra l’applicazione e il DBMS  
- Disaccoppiare la "presentation logic" dalla "business logic"  
- Generare automaticamente il codice di accesso ai dati a partire dal relativo diagramma ER  

### Domanda 7
**In un contesto di sviluppo Agile (ad esempio Extreme Programming), come avviene la pianificazione dei rilasci (Release Planning)?**  
- Gli sviluppatori producono le user stories, danno una stima in termini di "points" per ogni user story e fissano un tempo di consegna (TIME). Dopo aver dialogato con i customer, gli sviluppatori definiscono la release selezionando le user stories più difficili da implementare  
- I customer producono le user stories (aiutati dagli sviluppatori), gli sviluppatori danno una stima in termini di "points" per ogni user story, fissano un tempo di consegna (TIME) e un totale in points di user stories (TOT) da sviluppare in tale tempo. Alla fine i customer definiscono la release selezionando le user stories più importanti per il loro business, totalizzando il valore TOT  
- I customer producono le user stories, danno una stima in termini di "points" per ogni user story e fissano un tempo in cui vorrebbero avere il sistema funzionante (TIME). Gli sviluppatori fissano un totale in points di user stories (TOT) da sviluppare in tale tempo. Alla fine i customer definiscono la release selezionando le user stories meno importanti per il loro business, totalizzando il valore TOT  
- Gli sviluppatori producono le user stories (aiutati dai customer), danno una stima in termini di "points" per ogni user story, fissano un tempo di consegna (TIME) e un totale in points di user stories (TOT) da sviluppare in tale tempo. Alla fine i customer definiscono la release selezionando le user stories più importanti per il loro business, totalizzando il valore TOT-1  

### Domanda 8
**Che tipo di diagramma è rappresentato nella figura seguente?**  
- State diagram  
- Class diagram  
- Activity diagram  
- Non è un diagramma UML  

### Domanda 9
**Che cosa si intende con il termine “legacy system”?**  
- Un sistema non più moderno ma ben documentato e semplicemente rimpiazzabile con un altro sistema con le stesse funzionalità  
- Un sistema moderno progettato seguendo le “best practice” di progettazione e codifica riconosciute internazionalmente  
- Un sistema la cui struttura si è deteriorata con il tempo e per il quale l’attività di manutenzione è diventata prevalente su ogni altra  
- Un sistema “vecchio” (cioè implementato diversi anni fa con linguaggi ormai obsoleti), mantenuto in vita per lungo tempo, ma con una documentazione allineata con il codice e perfettamente comprensibile  

### Domanda 10
**Che cosa si intende con verificabilità di un requisito software?**  
- Ogni funzionalità del sistema deve poter essere fatta risalire a dei requisiti in modo semplice  
- I requisiti devono essere espressi in modo tale da essere testabili (es. "immediatamente" deve diventare "in ... secondi")  
- Ogni requisito deve avere solo un'interpretazione univoca (cioè non dovrebbe essere ambiguo)  
- I requisiti devono essere espressi in modo tale da non essere contradditori  

### Domanda 1
**Quale delle seguenti frasi è corretta/vera?**  
- Fault e failure sono sinonimi e si possono usare in modo intercambiabile in un documento tecnico  
- JUnit viene utilizzato principalmente per integration e system testing  
- Lo scopo del software testing è mostrare la presenza di fault  
- Un fault in un programma porta alla manifestazione di un failure (prima o poi)  

### Domanda 2
**Il refactoring è:**  
- Il processo che migliora la struttura interna di un sistema software e contestualmente modifica alcuni requisiti funzionali del sistema  
- Il processo correttivo e di sviluppo che avviene dopo il rilascio del prodotto finale in un ambiente di produzione  
- Un procedimento utilizzato per individuare le carenze di correttezza, completezza e affidabilità delle componenti software in corso di sviluppo  
- Il processo che migliora la struttura interna di un sistema software senza alterarne il comportamento esterno  

### Domanda 3
**In che modo possiamo esprimere i vincoli (cioè le constraint) in un diagramma delle classi UML?**  
- Unicamente utilizzando OCL  
- Indicandoli tra parentesi graffe attraverso il linguaggio naturale, un linguaggio di programmazione o OCL  
- Non serve un modo esplicito per aggiungere vincoli aggiuntivi: tutti i vincoli si possono esprimere mediante associazioni, attributi e generalizzazione  
- Non esiste una notazione specifica; l’unica regola è indicarli tra parentesi tonde  

### Domanda 4
**Di che tipo è il seguente requisito software: "La visualizzazione dell'estratto conto deve avvenire entro 4 secondi dalla sua richiesta"?**  
- Funzionale  
- Tecnologico  
- Non funzionale  
- Desiderabile  

### Domanda 5
**Quale è il tipo di manutenzione a cui è dedicata la percentuale più significativa dell’attività di manutenzione di un sistema?**  
- Correttiva (per “riparare” errori nel software)  
- Adattiva (per adattare il software a diversi ambienti)  
- Migliorativa (per aggiungere o modificare le funzionalità del sistema)  
- Preventiva (per prevenire problemi futuri)  

### Domanda 6
**UML può essere utilizzato in tre modi diversi: abbozzo (sketch), progetto dettagliato (blueprint) e come linguaggio di programmazione. In questo contesto, quale delle seguenti affermazioni è falsa?**  
- I progetti abbozzati sono deliberatamente incompleti e si concentrano solo sulle informazioni più importanti  
- I progetti abbozzati spesso riducono la programmazione in un’attività semplice e meccanica  
- Utilizzando strumenti (tool) sofisticati è possibile compilare un modello UML (debitamente arricchito di informazioni) direttamente in formato eseguibile  
- Un progetto dettagliato è rivolto innanzitutto alla completezza. L’approccio blueprint è ispirato alle altre branche dell’ingegneria dove i professionisti producono disegni tecnici che vengono poi passati alla fase di produzione  

### Domanda 7
**Quale tra i seguenti è uno svantaggio dello sviluppo basato sulle componenti?**  
- Aumenta la quantità di codice da sviluppare  
- Porta ad avere una documentazione scarsa e un’architettura software spesso complessa  
- Riduce la qualità del codice prodotto. Infatti, acquistando da terzi oppure utilizzando componenti open-source, non si ha la certezza che le componenti si comportino come prescritto nelle specifiche  
- I requisiti iniziali potrebbero differire da quelli che si possono soddisfare con le componenti trovate o acquistate. Quindi occorre negoziare con il cliente un cambiamento dei requisiti oppure sviluppare una o più componenti da zero  

### Domanda 8
**Come si chiama "la pallina" nel seguente diagramma UML e cosa rappresenta?**  
- Socket e rappresenta il servizio richiesto  
- Lollipop e rappresenta l’interfaccia esposta/fornita da una classe  
- Stereotipo e rappresenta un’associazione qualificata  
- Non è un elemento/costrutto UML  

### Domanda 9 
**Che cosa è un code smell?**
- Un “indicatore” che qualcosa nel codice non va bene. Lo sviluppatore deciderà a posteriori se intervenire o no 
- Una “certezza” che qualcosa nel codice non va bene. Lo sviluppatore dovrà intervenire per sistemare il problema 
- Un sinonimo di “code clone” 
- Un errore che necessariamente si manifesta durante l’esecuzione del software 

### Domanda 1
**In qualità di project manager, quale tra i seguenti modelli di processo di sviluppo software utilizzeresti per progettare un sistema safety-critical medicale di radioterapia molto complesso ed affidabile avendo a disposizione 40 sviluppatori?**  
- UML  
- Extreme Programming  
- Test Driven Development (TDD)  
- Unified Process  

### Domanda 2
**Solitamente la convalida (o validazione) dei requisiti si effettua mediante formal peer reviewes. Un altro modo per effettuare la convalida dei requisiti è:**  
- Utilizzare la tecnica del brainstorming  
- Chiedere a degli analisti (che non sono stati coinvolti nella stesura dei requisiti) di effettuare un’analisi dettagliata dei requisiti con lo scopo di identificare possibili aree di miglioramento  
- Scrivere dei casi di test a partire dai requisiti  
- Cercare eventuali requisiti contradditori (o in conflitto) ed identificare i missing requirements  

### Domanda 3
**Qual è il significato di "analisi dei trade-off" nel contesto delle architetture software?**  
- Valutare i vantaggi e svantaggi di una particolare architettura software tenendo in considerazione gli attributi o proprietà di qualità di sistema (es. Performance)  
- Verificare che l’architettura software scelta soddisfa i requisiti software  
- Analizzare l’architettura software con il fine di valutarne la tracciabilità con il codice  
- Valutare che l’architettura software sia conforme ai principi di buona progettazione/programmazione  

### Domanda 4
**Quale tra i diagrammi messi a disposizione da UML è il più indicato per rappresentare/descrivere/modellare un’operazione di una classe?**  
- Activity diagram  
- Sequence diagram  
- State machine diagram  
- Operation specification diagram  

### Domanda 5 
Utilizzando il metodo di sviluppo Extreme Programming come si produce di solito il design iniziale di un applicazione?   
- Si utilizza un UML modeller (ad esempio Visual Paradigm) e si progetta un blueprint (progetto dettagliato) utilizzando la textual analysis a partire dalle user stories 
- Si utilizza il metodo CRC (Class Responsibility Collaboration), che consiste nell’utilizzare dei foglietti adesivi sui quali si scrive il nome della classe, lo scopo e le collaborazioni con le altre classi 
- Il design iniziale non viene mai prodotto in quanto uno dei principi di Extreme programming è proprio quello di “saltare” la fase di design e “passare” direttamente  dai requisiti alla fase di codifica   
- Il design viene prodotto partendo dal modello del dominio ed arricchendolo fino ad ottenere un “modello eseguibile”. Successivamente il modello viene trasformato in codice usando un’apposito tool 

### Domanda 1
**Quale tra le seguenti architetture software trovi essere più adatta per sviluppare un IDE (integrated development environment) che fornisce anche un editor UML e un generatore di codice a partire dal modello UML?**  
- Layered model  
- Repository model  
- Pipe and Filter model  
- Model View Controller model  

### Domanda 2
**Quale tra i design pattern visti a lezione è utilizzato spesso nello sviluppo di framework perché in grado di realizzare l’inversione di controllo?**  
- State Pattern  
- Controller Pattern  
- Template Pattern  
- Façade Pattern  

### Domanda 3
**Considerando i principi di buona progettazione (e programmazione), che problemi manifesta la strategia denominata FORZA BRUTA per implementare un ORM?**  
- Accoppia fortemente le classi di dominio al DB e produce classi poco coese  
- Viola il principio di semplicità  
- Produce un alto Fan-in  
- Aumenta la metrica DIT (una delle metriche proposte da Chidamber & Kemerer nel contesto di software OO) sopra una soglia accettabile  

### Domanda 4
**Cosa ci fa capire questa figura?**
- Questa figura fa capire che: dividere il software in moduli piccoli fa diminuire il costo di integrazione dei moduli che lo compongono  
- Questa figura fa capire che: all’aumentare del costo di un software il numero dei moduli cresce  
- Questa figura fa capire che: dividere il software in moduli sempre più piccoli (infinite volte) fa diventare nullo il costo di sviluppo  
- Questa figura fa capire che: esiste un trade-off (rappresentato dalla regione di costo minimo M) tra il numero di volte che un problema viene decomposto (e quindi il software che lo risolve) e i costi di integrazione  

### Domanda 5
**Data la seguente state machine UML, cosa accade dopo che viene scatenato l’evento "e"?**  
- La macchina si troverà in S2  
- La macchina si troverà in modo non deterministico in S2 o S3  
- La macchina si troverà contemporaneamente in S2 e S3  
- Non può succedere perché tale configurazione (cioè: due transizioni con lo stesso evento e due condizioni diverse, entrambe vere) non è ammessa in una state machine UML  

### Domanda 6
**Come valuteresti questa porzione di Use Case Diagram?**
- Bene perché è stata applicata la best practice di scomposizione funzionale  
- Male perché la scomposizione funzionale è da evitare nel contesto degli Use Case Diagram  
- Bene perché il primo use case (ConduzioneBiblioteca) è molto astratto ed ingloba tutte le funzionalità degli use case inclusi  
- Male perché il numero di <<include>> totali nel diagramma è troppo alto  

### Domanda 7
**Perché è molto importante a livello di requisiti stabilire in modo chiaro e preciso i limiti/confini del sistema software che si vuole costruire?**  
- Per semplificare la fase di analisi dei requisiti e il testing del sistema  
- Perché in questo modo si evitano incomprensioni tra i vari stakeholder  
- Perché è provato che molti problemi a progetti software reali sono sorti proprio a causa di limiti/confini non definiti bene  
- Perché il modello dei casi d’uso prescrive di racchiudere i vari use case in un rettangolo che rappresenta i confini del sistema  

### Domanda 8
**Come si chiama il refactoring applicato nell’esempio seguente?**  
```java
void printOwing() {  
   printBanner();  
   // print details  
   System.out.println("name: " + _name);  
   System.out.println("amount: " + getOutstanding());  
}  
```
```java
void printOwing() {  
   printBanner();  
   printDetails(getOutstanding());  
}  

void printDetails(double outstanding) {  
   System.out.println("name: " + _name);  
   System.out.println("amount: " + outstanding);  
}
```
- Extract Method  
- Move Method  
- Change Method  
- Create Method  

### Domanda 9
**Quale tra le seguenti è una delle cinque leggi sull’evoluzione del software di Lehman?**  
- Refactoring continuo: un sistema deve essere rifattorizzato continuamente per prevenire il design decay/erosion  
- Costi in aumento: la manutenzione del software porta inevitabilmente a "Software Monsters" che fanno crescere i costi per tenere il sistema aggiornato e utile  
- Complessità in aumento: i cambiamenti complicano il sistema e la struttura si deteriora (a meno di non intervenire per evitarlo)  
- Working force: aggiungere forza lavoro ad un progetto software in ritardo, lo farà ritardare ancora di più  

### Domanda 10
**Si supponga di dover testare un metodo in un linguaggio OO che prende in input la rappresentazione numerica dei mesi (dove 1 corrisponde a Gennaio, 2 a Febbraio, etc.). Quali input dovremmo selezionare per applicare correttamente il criterio boundary value analysis?**  
- 1 e 12  
- 1, 6 e 12  
- 0, 1, 12, 13  
- 0, 1, 2, 11, 12, 13  

### Domanda 1
**È risaputo che sviluppare un sistema software di buona qualità è estremamente complesso. Tale complessità è da attribuire a varie ragioni, ma ci sono dei fattori che sono più importanti di altri. In particolare, durante il corso di Ingegneria del Software, è stato sottolineato spesso un fattore che in molti casi è la causa di un fallimento di un progetto:**  
- La complessità intrinseca del problema. Spesso i sistemi software che devono essere prodotti risolvono problemi molto complessi (ad esempio sistemi di controllo di reattori nucleari)  
- Il fattore tecnologico. Esistono molti "prodotti" simili forniti da diversi vendor (ad esempio linguaggi di programmazione, framework, application server o DBMS) e scegliere quello adatto al proprio progetto è molto complesso  
- Il fattore umano. Gestione del personale, problemi di comunicazione tra gli stakeholder e gli analisti/sviluppatori, difficoltà a lavorare in gruppo  
- Il fattore economico, ovvero mancanza di liquidità durante lo sviluppo del progetto  

### Domanda 2
**Quale delle seguenti affermazioni su UP (Unified Process) è falsa?**  
- UP è un modello "Use case driven" (ovvero è guidato dagli Use Case)  
- UP incorpora molte idee del modello a spirale  
- UP è più propriamente uno schema di modello (ovvero va adattato alle diverse realtà aziendali con opportune personalizzazioni)  
- UP può essere usato con qualsiasi linguaggio di modellazione del software (cioè non necessariamente con UML)  

### Domanda 3
**Il seguente artefatto che si riferisce ad un sistema grafico in fase di sviluppo è un esempio di:**  
- Requisito utente  
- Requisito di sistema  
- Caso d’uso (Use case)  
- User Story  

### Domanda 4
**In un diagramma dei casi d’uso quale relazione utilizzeresti per rappresentare il fatto che il caso d’uso FindBook rappresenta una variante più specifica del caso d’uso FindProduct?**  
- Inclusione (Include)  
- Generalizzazione/Specializzazione  
- Estensione (Extend)  
- Utilizzo (Use)  

### Domanda 5
**Quale tra le seguenti architetture software viste durante il corso di Ingegneria del Software trovi essere più adatta per sviluppare un sistema di sorveglianza dei confini di una nazione composto da diversi nodi (ad es. nodo sensore terrestre, nodo veicolo, nodo radar, nodo centrale di acquisizione dati per registrazione dello storico)?**  
- Broadcast model  
- Call-Return model  
- Layered model  
- Manager model  

### Domanda 7
**UML definisce una notazione (o meglio una famiglia di notazioni) e un meta-modello. Cosa definisce il meta-modello?**  
- Come vengono rappresentati i concetti del linguaggio (ad es. classi e associazioni) all’interno dei vari diagrammi  
- Gli stereotipi usati in UML, i vincoli e le informazioni semantiche aggiuntive  
- La tipologia dei diagrammi mediante la relazione di specializzazione  
- I concetti stessi del linguaggio (ad esempio "da cosa" è composta una Classe)  

### Domanda 8
**Quale delle seguenti affermazioni è scorretta?**  
- `objX` chiama l’operazione `drive()` di `Car`, `drive()` chiama `startEngine()`, `startEngine()` chiama `getKey()` e `insertKey()` in successione  
- `startEngine()` è un self-message  
- `drive()` è un’operazione della classe `ClassX`  
- `insertKey()` è un’operazione della classe `Car`  

### Domanda 9
**Supponiamo di dover realizzare una piccola applicazione in grado di notificare l’utente attraverso l’apertura di un popup quando arriva una nuova mail sulla sua casella di posta elettronica. Quale tra i seguenti Design pattern ci potrebbe tornare utile?**  
- Abstract factory  
- Adapter  
- Template method  
- Observer  

### Domanda 10
**Si supponga di dover testare la seguente operazione `int classify(int side1, int side2, int side3)` che prende in input tre interi che rappresentano tre lati di un triangolo e che ritorna: 0 se il triangolo è scaleno, 1 se è equilatero, 2 se è isoscele, -1 se non è un triangolo. Quale tra le seguenti test suite soddisfa il criterio di equivalence partitioning (senza considerare negative testing)? **
- {(4,5,6), (3,3,4), (3,3,3), (a,b,c)}
- {(4,5,6), (3,3,4), (3,3,3)}
- {(4,5,6), (3,3,4), (3,3,3), (1,1,8)}

### Domanda 1
**In termini di principi OO di progettazione, che cosa si può affermare della seguente classe `Car`?**  
```java
public class Car {  
   private String make = "Aston Martin";  
   private int numberOfWindows = 5;  
   
   public void drive() { /* do some driving */ }  
   public void brake() { /* slow down */ }  
   public void stop() { /* STOP! */ }  
   public void printDocument(Document d) { /* print Document */ }  
}
```
- La classe Car è fortemente accoppiata
- L’information hiding della classe Car è basso
- La classe Car ha coesione alta
- La classe Car ha coesione bassa

### Domanda 2
**Quale tra i seguenti statements non fa parte del "Agile manifesto"?**  
- Gli individui e le interazioni *più che* i processi e gli strumenti  
- I requisiti software *più che* il design di un sistema  
- La collaborazione col cliente *più che* la negoziazione dei contratti  
- Rispondere al cambiamento *più che* seguire un piano  

### Domanda 3
**In che modo possiamo esprimere i vincoli (cioè le constraint) in un diagramma delle classi UML?**  
- Unicamente utilizzando OCL  
- Indicandoli tra parentesi graffe attraverso il linguaggio naturale, un linguaggio di programmazione o OCL  
- Non serve un modo esplicito per aggiungere vincoli aggiuntivi: tutti i vincoli si possono esprimere mediante associazioni, attributi e generalizzazione  
- Non esiste una notazione specifica; l’unica regola è indicarli tra parentesi tonde  

### Domanda 4
**Quale è il tipo di manutenzione a cui è dedicata la percentuale più significativa dell’attività di manutenzione di un sistema software?**  
- Correttiva (per “riparare” errori nel software)  
- Adattiva (per adattare il software a diversi ambienti)  
- Migliorativa (per aggiungere o modificare le funzionalità del sistema)  
- Preventiva (per prevenire problemi futuri)  

### Domanda 5
**Nel seguente package diagram UML cosa non è normativo (o legale)?**  
- La freccia tratteggiata  
- La nota posta a destra nel diagramma  
- La presenza degli attori (“omini stilizzati”)  
- Il nome dei package (non deve iniziare per una lettera maiuscola)  

### Domanda 6
**Quale delle seguenti frasi sul design by contract è falsa?**  
- Migliora la documentazione  
- Aiuta nella scelta dell’architettura software  
- Guida il testing  
- Migliora la qualità del software prodotto  

### Domanda 7
**Quale tra i seguenti è uno svantaggio dello sviluppo basato sulle componenti?**  
- Aumenta la quantità di codice da sviluppare  
- Complica l’architettura software del sistema che si sta sviluppando  
- Riduce la qualità del codice prodotto (per esempio perché l’utilizzo di componenti open-source non garantisce la correttezza delle funzionalità offerte)  
- Spesso occorre negoziare con il cliente una modifica dei requisiti. In alternativa, occorre sviluppare una o più componenti "from scratch"  

### Domanda 8
**Quale tra le seguenti affermazioni sul Software testing è vera?**  
- È solitamente possibile testare tutte le combinazioni di input/output per un sistema software. Tuttavia questa strategia non viene seguita per ragioni economiche  
- Il test esaustivo è, con sufficiente sforzo e strumenti adatti, adatto per tutto il software  
- Un test è chiamato "negative" quando si utilizzano input illegali con lo scopo di testare le eccezioni oppure sollevare dei failure  
- Lo scopo del testing è dimostrare l’assenza di difetti  

### Domanda 9
**Nel contesto della persistenza, cosa esemplifica il seguente sequence diagram UML?**  
- L’approccio chiamato DAO  
- L’approccio denominato “Brute force”  
- L’approccio relativo ad un Persistence framework  
- L’approccio TDD  

### Domanda 10
**Supponiamo di avere a che fare con una classe `Client` che per realizzare una singola operazione deve accedere ad alcune classi molto differenti tra loro (chiamando i metodi: `metodo1`, `metodo2`, `metodo3` e `metodo4`). Durante un’operazione di refactoring, quale design pattern utilizzeresti per migliorare lo stato delle cose?**  
- Façade  
- Adapter  
- Composite  
- Decorator  

### Domanda 1
**In qualità di project manager, quale tra i seguenti modelli di processo utilizzeresti per progettare un sistema safety-critical di monitoraggio pazienti in un ospedale che deve essere molto affidabile avendo a disposizione 40 sviluppatori?**  
- Model Driven Development  
- Extreme Programming  
- Code and Fix  
- Unified Process  

### Domanda 2
**I vantaggi principali offerti da un persistence framework quali ad esempio Hibernate sono:**  
- Possibilità di accedere a basi di dati legacy mal progettate  
- Accoppiamento diretto tra applicazione e DB (chi sviluppa l’applicazione deve conoscere bene i dettagli del DB)  
- Incremento delle prestazioni  
- Facilità nel cambiare la corrispondenza tra oggetti e DB, facilità di riuso e indipendenza dallo specifico DBMS  

### Domanda 3
**Quale tra le seguenti NON è una delle proprietà che dovrebbero caratterizzare i requisiti?**  
- Verificabilità  
- Coesione  
- Consistenza  
- Realismo  

### Domanda 4
**Quale tra le seguenti strategie di test sceglieresti per testare una classe: (1) con complessità ciclomatica alta, (2) che realizza una funzionalità di business molto complessa,(3) che è stata sviluppata in un linguaggio che conosci molto bene (es. C#)?**
- Black box testing  
- System testing (o testing di sistema)  
- White box testing applicando il criterio branch coverage  
- White box testing applicando il criterio path coverage completo  

### Domanda 5
**In UML quale è il modo più corretto per esprimere una relazione "tutto-parti" tra due classi?**  
- Tramite una dipendenza  
- Tramite un’associazione  
- Tramite una relazione di ereditarietà  
- Tramite un’aggregazione  

### Domanda 6
**Una componente che modifica dati interni ad un’altra componente è un esempio:**  
- Accoppiamento forte  
- Accoppiamento debole  
- Bassa coesione  
- Alta coesione  

### Domanda 7
**Che cosa è un code smell?**  
- Un “indicatore” che qualcosa nel codice non va bene. Lo sviluppatore deciderà a posteriori se intervenire o no  
- Una “certezza” che qualcosa nel codice non va bene. Lo sviluppatore dovrà intervenire per sistemare il problema  
- Un sinonimo di “code clone”  
- Un errore che necessariamente si manifesta durante l’esecuzione del software  

### Domanda 8
**Come si chiama il refactoring applicato nell’esempio seguente?**  
- Move fields
- Extract method
- Extract class
- Pull-up method

### Domanda 9
**Utilizzando il metodo di sviluppo Extreme Programming, di solito, come si produce il design di un’applicazione?**  
- Si utilizza un UML modeller (ad esempio Visual Paradigm) e si progetta un blueprint (progetto dettagliato)  
- Si utilizza il metodo CRC (Class Responsibility Collaboration), che consiste nell’utilizzare dei foglietti adesivi sui quali si scrive il nome della classe, lo scopo e le collaborazioni con le altre classi  
- Il design viene prodotto avendo a disposizione il cliente (On-site Customer), per tutta la durata del progetto, tramite “User stories” (foglietti adesivi su cui si scrivono "le intenzioni" del cliente)  
- Il design viene descritto in UML utilizzando un approccio top-down fino ad ottenere un “modello eseguibile”. Successivamente il modello viene trasformato in codice tramite tecniche di MDD  

### Domanda 1
**Quale modello di processo di sviluppo software evidenzia come le attività di testing sono collegate a quelle di analisi e progettazione?**  
- Modello a cascata con feedback e iterazioni  
- V-model  
- Modello a spirale  
- UP (Unified Process)  

### Domanda 2
**In un diagramma dei casi d’uso quale relazione utilizzeresti per rappresentare il fatto che il caso d’uso FindDVD rappresenta una variante più specifica del caso d’uso FindProduct?**  
- Inclusione (Include)  
- Generalizzazione/Specializzazione  
- Estensione (Extend)  
- Utilizzo (Use)  

### Domanda 3
**La seguente state machine UML modella il ciclo di vita di un corso in un sistema universitario di registrazione studenti. Quando un corso può essere cancellato?**  
- In ogni stato della state machine  
- Solo quando è ‘Full’  
- Solo quando è ‘Closed to Enrollment’  
- Sia quando è ‘Full’ che quando è ‘Open For Enrollment’  

### Domanda 4
**In un sistema medio-grande quale tra i seguenti diagrammi UML è utilizzato per tenere sotto controllo la complessità strutturale del codice?**  
- Package diagram  
- Deployment diagram  
- Class diagram  
- Interaction diagram  

### Domanda 5
**Cosa esemplifica (ti fa venire in mente) la figura mostrata a lato?**  
- Un’operazione di Reverse engineering  
- I cicli del Test Driven Development  
- Il processo di Re-engineering  
- Il ciclo di Restructuring  

### Domanda 6
**Per ottenere branch coverage 100% del seguente control Flow Graph sono necessari almeno:**  
- Due casi di test  
- Un caso di test  
- Tre casi di test  
- Quattro casi di test  

### Domanda 7
**Quale refactoring visto a lezione si può applicare ad una porzione di codice avente la seguente struttura?**  
- Pull up  
- Pull down  
- Move method  
- Replace Inheritance with Delegation  

### Domanda 8
**Si supponga di dover decidere un sistema di persistenza per un sistema software dove "data size" e "data complexity" sono molto molto elevati. Basandoti solo su questa informazione quale tra le seguenti opzioni ti sembra essere la più adatta?**  
- Serializzazione  
- DBMS NoSQL  
- ORDBMS  
- OODBMS  

### Domanda 9
**Quali tra i seguenti motivi di insuccesso di un progetto software si trovano nelle primissime posizioni nella lista stilata nello Standish Group?**  
- Incompetenza tecnologica dello staff informatico  
- Carenze di risorse e carenza di gestione del settore IT  
- Mancato supporto dei manager  
- Incompletezza dei requisiti e mancato coinvolgimento degli utenti durante la fase di analisi  

### Domanda 10
**La seguente figura rappresenta l’architettura software di un’applicazione. A quale stile architetturale visto a lezione è conforme?**  
- Pipe and Filter  
- Broadcast  
- Repository  
- Stratificato (Layered)  

### Domanda 1
**Questa figura vista a lezione rappresenta il processo di rilascio del metodo di sviluppo denominato Extreme Programming. Che cosa rappresentano i cubi i1, i2 e i3?**  
- Rappresentano degli artefatti generici (ad esempio requisiti, codice, design, piani dei test) che vengono rilasciati al cliente  
- Rappresentano versioni di codice che vengono rilasciate ad un insieme di clienti selezionati per la fase di Beta-testing. Solo dopo questa fase il codice verrà rilasciato a tutti i clienti  
- Rappresentano versioni di codice funzionante (nel senso che può essere eseguito), via via sempre più complete, che vengono rilasciate al cliente  
- Rappresentano versioni di codice che vengono passate al gruppo di test per effettuare le fasi di validazione e verifica di sistema. Solo dopo questa fase il codice sarà rilasciato al cliente  

### Domanda 2
**È risaputo che sviluppare un sistema software di buona qualità è complesso. Tale complessità è da attribuire a varie ragioni, ma ci sono dei fattori che sono più importanti di altri. In particolare, durante il corso di Ingegneria del Software, è stato sottolineato spesso un fattore che in molti casi è la principale causa di fallimento di un progetto:**  
- La complessità intrinseca del problema. Spesso i sistemi software che devono essere prodotti risolvono problemi molto complessi (ad esempio sistemi di controllo di reattori nucleari)  
- Il fattore tecnologico. Esistono molti "prodotti" simili forniti da diversi vendor (ad esempio linguaggi di programmazione, framework, application server) e scegliere quello adatto al proprio progetto è molto complesso  
- Il fattore umano. Gestione del personale, problemi di comunicazione tra gli stakeholder e gli analisti/sviluppatori, difficoltà a lavorare in gruppo  
- Il fattore economico, ovvero mancanza di liquidità durante lo sviluppo del progetto  

### Domanda 3
**Quale delle seguenti affermazioni è scorretta?**  
- `objX` chiama l’operazione `drive()` di `Car`, a sua volta `drive()` chiama `startEngine()`, `startEngine()` chiama `getKey()` e `insertKey()` in successione  
- `getKey()` è un self-message  
- `drive()` è un’operazione della classe `ClassX`  
- `insertKey()` è chiamata all’interno dell’operazione `startEngine()`  

### Domanda 4
**Nel seguente component diagram UML "preso da internet" cosa non è corretto rispetto a quanto visto a lezione?**  
- Gli archi che mostrano dipendenza tra componenti sono mostrati con una freccia tratteggiata ed invece dovrebbero essere continui  
- I due lollipop (`spellchecker` e `synonymfinder`) sono interfacce esposte e quindi dovrebbero essere rappresentate con i socket  
- Gli stereotipi (ovvero lo specificare il tipo di componente tra parentesi angolari `<< >>`) non sono ammessi per le componenti software  
- In questo diagramma sono rappresentati gli artefatti al posto delle componenti. Le componenti sono entità logiche che sono realizzate da artefatti (che sono invece entità fisiche)  

### Domanda 5
**Supponiamo di dover implementare un software per il gioco del monopoli con le classi: `Monopoli`, `Scacchiera`, `Casella`, `Pezzo` e `Giocatore`. Chi dovrebbe creare un oggetto di tipo `Casella`?**  
- La classe `Monopoli`  
- La classe `Scacchiera`  
- La classe `Casella`  
- La classe `Pezzo`  

### Domanda 6
**Quando viene comodo utilizzare il seguente design pattern?**  
- Quando si vuole convertire l’interfaccia di una classe in un’altra interfaccia che il cliente si aspetta  
- Quando si vogliono introdurre strategie per la gestione della memoria per migliorare le prestazioni (es. Caching)  
- Quando si vogliono aggiungere facilmente nuovi prodotti (ad esempio `ProductC`)  
- Quando si vogliono creare famiglie di prodotti (oggetti connessi o dipendenti tra loro), in modo che non ci sia necessità da parte dei client di specificare le classi concrete dei prodotti all’interno del proprio codice  

### Domanda 7
**I metodi (o approcci) di sviluppo plan-driven vengono usati in certi contesti (ad esempio quando abbiamo a che fare con un grosso sistema safety-critical) mentre i metodi agili sono più adatti in altri (ad esempio con sistemi e team piccoli, clienti e utenti disponibili, ambiente e requisiti volatili). Come ci si deve regolare se dobbiamo affrontare un progetto che possiede dei fattori "contrastanti"?**  
- È preferibile andare sul sicuro ed utilizzare un metodo plan-driven quale ad esempio UP  
- Siccome è noto che i metodi agili (ad esempio XP) sono i più usati e sono decisamente più performanti, è meglio utilizzare un metodo agile anche nei casi dubbi  
- Bisogna cercare di bilanciare il rigore/disciplina dei metodi plan-driven con la flessibilità dei metodi agili  
- In questi casi rari è consigliato utilizzare il metodo di sviluppo "code & fix"  

### Domanda 8
**Si supponga un sistema per la gestione dei pagamenti dove `POST` è una classe usata per gestire nuovi acquisti con l’operazione `makePayment()`. Guardando il diagramma quale tra le seguenti affermazioni è l’unica vera?**  
- La classe `POST` è accoppiata fortemente (`strong coupled`) con le altre classi  
- Il diagramma UML in questione è un object diagram  
- `makePayment()` crea un’istanza di `Payment` chiamata `p` e successivamente chiede al reparto vendite (`Sale`) di aggiungere il pagamento `p`  
- La prima chiamata dell’operazione `makePayment()` (identificata con `1:`) crea un’istanza di `Payment` chiamata `p`. La seconda chiamata di `makePayment()` (identificata con `2:`) chiede al reparto vendite (`Sale`) di aggiungere il pagamento `p`  

### Domanda 9
**Che cosa è la Textual Analysis (o analisi del testo) nel contesto dell’ingegneria del Software?**  
- È la maniera a cui ci si riferisce all’uso dell’elaborazione del linguaggio naturale, analisi testuale e linguistica computazionale per identificare ed estrarre informazioni soggettive da diverse fonti  
- È un processo utilizzato per analizzare il dominio di un Sistema (system domain). Aiuta ad identificare le classi, gli use case e gli attori a partire dalla descrizione del problema data in forma testuale  
- È un insieme ampio ed eterogeneo di tecniche manuali o assistite da computer di interpretazione contestualizzata di documenti provenienti da processi di comunicazione in senso proprio (testi) o di significazione (tracce e manufatti), aventi come obiettivo finale la produzione di inferenze valide e attendibili  

### Domanda 10
**Che cosa potrebbe esemplificare la seguente figura?**  
- Una lista di linguaggi di programmazione  
- La migrazione di un software su diversi nodi computazionali  
- Il metodo di sviluppo agile programming (programmazione agile)  
- L’applicazione del model driven development (MDD)  

### Domanda 1
**Quale, tra i seguenti, non è un requisito funzionale?**  
- La nuova pagina Web deve essere usabile in modo identico a quella della versione precedente del sito Web  
- È richiesto che l'utente si autentichi inserendo username e due tipologie diverse di password  
- Il sistema deve permettere di visualizzare il contenuto della pagina sia in italiano che in inglese  
- Come per la versione precedente del software, il sistema deve permettere la ricerca di utenti per data di nascita  

### Domanda 2
**Quale tra le seguenti non è un vantaggio dell'applicazione del Design Pattern Facade?**  
- Realizza inversione del flusso di controllo  
- Nasconde al cliente le componenti (complesse) del sottosistema  
- Riduce la dipendenza tra client e sottosistema  
- Non esclude l'uso diretto del sottosistema. Il Client può comunque utilizzare direttamente il sottosistema se lo ritiene necessario  

### Domanda 3
**Quale dei seguenti punti/voci NON necessita della collaborazione tra gli sviluppatori/analisti software ed i clienti?**  
- L'interfaccia utente  
- I requisiti del sistema  
- Decidere quale processo di sviluppo utilizzare  
- Decidere quale tecnica di testing applicare a livello di unità (es. white o black box)  

### Domanda 5
**In quale caso è possibile applicare il refactoring chiamato 'Separate Domain from Presentation'?**  
- Quando siamo in presenza di un modulo che contiene una condizione che sceglie differenti comportamenti a seconda del tipo di una variabile di presentazione  
- Quando siamo in presenza di un modulo (chiamato anche God/Blob) che esegue troppi compiti (bassa coesione) ed è molto accoppiato con gli altri moduli (alto accoppiamento)  
- Quando siamo in presenza di un modulo che gestisce la business logic e la persistenza dei dati  
- Quando siamo in presenza di un modulo che gestisce l'interfaccia grafica e parte della logica di business dell'applicazione  

### Domanda 6
**Si consideri una classe C con tre metodi: M1, M2, M3 e cinque field: a, b, c, x, y tali che:  <br>
- M1 e M2 accedono ai field: a, b, c  <br>
- M3 accede ai field: a, x, y  <br>
Cosa possiamo dire di questa classe dal punto di vista della coesione (motivare la risposta)?**
- La classe NON è coesa perchè calcolando LCOM si ottiene il valore 1  
- La classe NON è coesa perchè non esistono due metodi nella classe tali che l'intersezione delle variabili usate (o accedute) è vuota  
- La classe è coesa perchè calcolando LCOM si ottiene il valore 1  
- La classe è coesa perchè non esistono due metodi nella classe tali che l'intersezione delle variabili usate (o accedute) è vuota  

### Domanda 7
**Quale tra le seguenti frasi è corretta?**  
- Un modello è conforme al suo metamodello alla stessa maniera in cui un programma per computer è conforme alla grammatica del linguaggio di programmazione in cui è scritto  
- Le istanze di un modello sono dei meta-modelli  
- I progettisti software che utilizzano UML nelle proprie aziende durante la fase di sviluppo di un sistema software creano solitamente dei meta-modelli  
- UML non definisce un meta-modello  