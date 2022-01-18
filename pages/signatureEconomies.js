import HeadComponent from "../components/Head";
//import Button from '../components/core/Button';

// Function to get the Selected Text 
function getSelectedText() {
    var selectedText = '';
    if (typeof window !== "undefined") {
      // window.getSelection
      if (window.getSelection) {
          selectedText = window.getSelection();
      }
    }
    else if (typeof document !== "undefined") {
      // document.getSelection
      if (document.getSelection) {
          selectedText = document.getSelection();
      }
      // document.selection
      else if (document.selection) {
          selectedText = 
          document.selection.createRange().text;
      } else return;
      // To write the selected text into the textarea
      document.testform.selectedtext.value = selectedText;

  }

}


export default function SignatureEconomies() {
  return (
    <>
    <div>
      <HeadComponent/>
      <div
        className="flex flex-col items-center flex-1                
                      px-4
                      sm:px-5
                      md:px10 
                      lg:px-40
                      py-20 
                      text-center"
      >
        <div className="flex w-full mb-8 sm:mb-0 ">
            <div className="hidden sm:block flex-1">
            </div>
            <div className="flex-0 w-full flex justify-center sm:justify-end">
              {/* <Button>
                <a className="font-mono"
                  href="/declaration"
                  >
                    Declaration →</a>
              </Button> */}
            </div>
          </div>
        <h2 className="mt-20 text-3xl font-title w-full font-bold px-20 text-center">
          Signature Economies
        </h2>
        <div
          className="mt-10 
            font-body 
            text-2xl
            text-left 
            text-opacity-75 
            space-y-7
            max-w-4xl 
            px-5
            md:px-10"
        >

          {/* <h2 className="pt-10 font-bold text-2xl text-title"> Signature Economies </h2> */}
          
          <p style={{'text-indent': '2rem'}}>
          Public blockchains present a paradox of ownership. 
          No-one controls them and anyone can use them, given a connection and an ability to speak the common tongue. 
          The network is ownerless, yet anyone who creates a key ‘owns’ any coins associated with it, so everyone is an owner. 
          This confusion reveals how ‘ownership’ is shifting and highlights the opportunity we have not to implement an ‘ownership economy’, but to reimagine what being an owner means.
          </p>


        <button 
        onClick={getSelectedText()}
               value="Get Selection"> Get Select  </button>
      
        <form name="testform">
            <textarea name="selectedtext" 
                      rows="5"
                      cols="20"></textarea>
        </form>

          <p style={{'text-indent': '2rem'}}>
          We can begin this process by asking, “What do I actually control?”
          </p>

          <p style={{'text-indent': '2rem'}}>
          In Bitcoin, I can sign over an unspent transaction output to another address. 
          In Ethereum and other account-based models, I can sign a message which changes a value stored in shared state. 
          In each case, I am not the sole possessor or controller, I am a signatory on an event shared with everyone who participates in the network.
          </p>

          <p style={{'text-indent': '2rem'}}>
          So, ownership in digital economies is really about the meaningful signatures required to execute state changes while maintaining consensus. 
          Is ownership shifting from an ability to demonstrate control or possession to the ability to make meaning? If so, the change in signification is a radical one, because ownership is traditionally about exclusive rights, whereas meaning is made valuable by how widely it is shared. 
          The medium may be massaging ownership to mean its opposite.
          </p>

          <p style={{'text-indent': '2rem'}}>
          The very first proto-NFTs hinted at this shift. 
          “Towards An Ownership Layer for the Internet” speaks about tractable solutions to “make ownership actions of digital property universally accessible.” 
          Only in web3 can the words ‘ownership’ and ‘universally accessible’ be found together sensibly. 
          The first work about ownership and art in Ethereum ends by pointing out that it differs from traditional art markets because it is public, transparent and voluntary.
          </p>

          <p style={{'text-indent': '2rem'}}>
          Perhaps all this work is not about the right to control, but responsibility? 
          Having no intermediaries creates certain benefits, but it is - as always - a tradeoff: if you misplace your mnemonic, it means no more magic internet money and there is no customer service to help you. 
          This can be addressed by interdependent architectures and, in the context of responsibility not just for our own keys but the recovery of others, “Make meaningful economies” is a more crafty cultural signal than “Own your piece of the economy”.
          </p>

          <p style={{'text-indent':'2rem'}}>
          It’s also critical that our terms are plural. 
          Our work must not be about replicating one dominant economic paradigm, supposedly better than the last. 
          It could instead be about cultivating the space for many different concepts of value to interface with one another in creative ways which don’t aim for cancerous growth, but are self-sustaining, responsible and resilient.
          </p>

          <h2 className="pt-10 text-3xl font-title w-full px-20 text-center">
          Response-ability
         </h2>


          <p style={{'text-indent': '2rem'}}> 
          The phrase ‘not your keys, not your coins’ is often used to connote sovereign rights. 
          If you hold the keys, then you have an absolute and unimpeachable right to sign as you please. 
          It turns out, though, that managing your own keys is risky and hard. 
          The user experience of this is bad not because we lack great designers, but because responsibility is an inherently difficult feature for which to design. 
          This is because response-ability is not about discrete, individual actions which release the most dopamine, but our unique relationships within a network. 
          Designing for multiple, simultaneous use is not a practice consumer culture values highly.
          </p>

          <p style={{'text-indent': '2rem'}}>
          Single sign-ons represent us as separate users and when - neatly categorized - we log in, we also hand over authority, become the audience, and are subject to someone else’s story. 
          However, signed messages which change the state of a network no-one controls require recurring participation as we commit individual transactions into a shared, relatable context. 
          The gift of being able to express what value means to you is always already bound to the responsibility you have to be aware of what you are saying and how you are speaking it into the world.
           </p>

          <p style={{'text-indent': '2rem'}}>
          Moreover, the ability to bear responsibility is a prerequisite for meaningful legal rights, a point made explicit in signature economies. 
          Just as there is no meaningful speech on-chain without cost, any rights you may enjoy on-chain are simultaneous with the responsibility you bear for the keys used to sign for them. Used intentionally, digital bearer instruments could be about more than claims or access, extending to the “right to care” and the “freedom to exercise responsibility”. 
          This kind of careful responsibility signifies the same internal state as words like kaitiaki: guardianship that is not about control, but relationship.
          </p>
          
          <p style={{'text-indent': '2rem'}}>
          Can we create a culture where I am wealthy by virtue of what I care for, rather than what I control? Where wealth means “having enough to share” because who you are is already enough. 
          Can we create environments where what I hold is made valuable because of the community to which it binds me? This is what good mechanism design crafts: incentive structures which create the context required for people to sign a communal record of the things they care for most as individuals. 
          The intercourse of personal meaning and collective memory is the root of lasting value.
          </p>

          <h2 className="pt-10 text-3xl font-title w-full px-20 text-center">
          Re-iterate
        </h2>

          <p style={{'text-indent': '2rem'}}>
            All of which brings us to the word ‘signature’. 
            It connotes both that which is irreducibly and uniquely you - your signature dish, signature tune, signature shot - and that which binds you contractually to a world beyond yourself. 
            In Derrida’s words, it is at once singular and iterable. 
            A wonderful phrase that carries the same kind of paradoxical structure is the isiZulu saying, “umuntu ngumuntu ngabantu”: a human being is only a human being through other human beings. 
            We have here the possibility of individuation: you can become a full human being; but you can only do so in community. 
            You can only do so through fulfilling your responsibilities in relationship, not through asserting your rights.
          </p>

          <p style={{'text-indent': '2rem'}}>
          Even the word ‘economies’ contains this same double-directedness. 
          It comes from the Greek oikos, which means ‘house’. 
          Sustainable household management requires micro insights into each of our habits, as well as macro perspectives of our shared habitations, including the planet which houses us all.
          Home is an irreducible, internal feeling that simultaneously requires relationship and familiarity with others. 
          </p>

          <p style={{'text-indent': '2rem'}}>
          Similarly, meaningful words arise due to individual creativity within a community who agrees upon their use, which is why language itself is the only logically decentralized system we know. 
          When what we say and how we say it invites people in and calls up a response, meaning is made more widely accessible. 
          When we cast these new networks as economies of sign rather than of ownership, then the game becomes one of actively finding more people able to respond, rather than extracting rent from my exclusive right to some artificially scarce series of bits.
          </p>

          <p style={{'text-indent':'2rem'}}>
          Economies of sign emerge from the shared experience of public consensus rules, clearly priced opcodes, and executable speech. 
          The value of such economies is held in positively signed individual messages which enact meaning within the context of a collective record that no-one controls. 
          This doesn’t mean we can now name (or code) the dao; it just means we can iteratively sign into existence the kind of shared state which will allow individuals to experience harmoniously what words like dao signify in their personal contexts.
          </p>

          <p style={{'text-indent':'2rem'}}> 
          How can I take responsibility without the resources to make my signature meaningful, though? I have tried to use words to speak my imagination into existence, and have seen the limits of such work. My signatures do not move markets. However, markets are not the arbiters of meaning, they are mechanisms for efficient resource allocation. Your signature is not made meaningful by 
          its effects: your signature is meaningful by virtue of its singular existence. New forms of ignorance and injustice will always appear, yet knowing this and still having the will and creativity to iterate over incentive structures is what will continually imbue our shared record with true beauty.
          </p>
          <p>
          “Everything depends on the individual human being, regardless of how small a number of like-minded people there are […] on each person […] creatively making the meaning of life a reality in his or her own being.” - Viktor Frankl
          </p>
          {/* <p style={{'text-indent': '2rem'}}> 
            We believe that to build towards the pluriverse means building in a way that is open, interoperable, and supports the commons. 
            It means building with an ethos of interdependence. It means not building moats, including data moats, that restrict the freedom of “all peoples to choose, 
            individually or collectively, [any] relations”, but paving existing desire paths and tools that others can freely choose to traverse, shape, and use. 
          </p> */}
        
        <h2 className="pt-10 text-3xl font-title w-full px-20 text-center">
          Song of Signs
        </h2>

          <p style={{'text-indent':'2rem'}}>
          The ‘coin’ your key controls comes from the Latin word cuneus, which once meant ‘cornerstone’. In this single sign is the signal we can use to understand the shifting meaning of ownership. Will your coins be the cornerstones of pluriverses, or the currency of one more unjust and unequal realm? 
          </p>

          <p style={{'text-indent': '2rem'}}>
          Because it has worked almost exactly as it should, one of the few things people notice about the Ethereum Foundation is the principle of subtraction. 
          Do not make yourself the onlyOwner: it is by subtracting from your own importance that care for, and improvement of, our communal capacity and capability can happen. 
          </p>

          <p style={{'text-indent': '2rem'}}>
          Seek to improve the people around you by humbling yourself and handing over power at every chance, without shirking responsibility. 
          Delighted, you will gradually find yourself doing nothing, being happy.
          </p>

          <p style={{'text-indent':'2rem'}}>
          There is also another connotation waiting for us in the word ‘economy’: to use sparingly. 
          The messages we sign as a means of managing our shared record cannot be censored by anyone, but they can be seen by everyone, so be careful what kinds of money you make meaningful. 
          With programmable power comes permanent accountability. 
          </p>

          <p style={{'text-indent':'2rem'}}>
          The word ‘token’ comes from a Germanic root meaning ‘to teach’. 
          Kei Kreutler teaches that it also carries the trace of the older word sunthemata: divine symbols within all existence meant to assist the soul on its journey from, and back to, grace. 
          When we leave a token of love or appreciation for no reason other than the simple recognition that love and gratitude are already their own reward, then such signed symbols can guide us all home, across time. 
          This is what I understand courageous signatures to mean: not just the set which shifts markets and remakes the world, but the superset which marks what I already mean, which re-members this singular human response to our shared being.
          </p>


          <p className="pt-10" style={{'text-indent':'2rem'}}>
          Poetry, well placed, <br/>
          can serve up <br/>
          a subversive education <br/>
          in potent signs, <br/>
          drawing out what is <br/>
          already within <br/>
          so we can wake <br/>
          the dream into reality. 
          </p>

          <p className="pt-10" style={{'text-indent':'2rem'}}>
          Peer into this paradox <br/>
          without possessing it. <br/>
          Play the nebulous pattern <br/>
          of you through all <br/>
          the others who care, <br/>
          key pairs sharing what comes, <br/>
          meaning they make wealth <br/>
          between the curves <br/>
          of this created web <br/>
          we now call home. </p>

          <p className="pt-10" style={{'text-indent':'2rem'}}>
          There is the courage <br/>
          in each heart <br/>
          to hear truth <br/>
          and bear witness <br/>
          and lay no claim. </p>

          <p className="pt-10" style={{'text-indent':'2rem'}}>
          Simply sign it on, <br/>
          my soul. 
          </p>
        </div>
      </div>
    
    </div>
    <footer className="py-10 font-mono text-center text-sm text-gray-600 items-center"> 
       <a 
        href={"/declaration"}
        className="px-2 border-purple-2004 border-b-2 rounded-xl"> 
          (Planted on the Permaweb. ☘️. Oct 31, 2021.)
       </a>
      <div className="mt-10 
        px-20
        flex flex-col items-center 
        font-body text-sm text-gray-600 content-center">

        <div className="md:max-w-3xl space-y-3">
              <p className="text-left">
                <sup> 1 </sup>
                The use of “can” rather than “may” in this sentence illustrates how law is enacted in substantive rather than formal ways on such networks.
              </p>
              <p className="text-left">
               <sup> 2 </sup> 
               The word ‘technology’ comes to us from the Greek tekhne, meaning ‘craft’.
               </p>
              <p className="text-left"> 
                <sup> 3 </sup>  Tolkien’s description of the difference between allegory and applicability captures the problem crypto UX designers face: applicability is about the freedom of the reader; allegory is about the domination of the author. Applicability creates the freedom for us to respond to our own constraints, allegory limits our imagination of what it might actually mean to connect the world. 
              </p>
              <p className="text-left">
              <sup> 4</sup> The otherinter.net phrases it thus: “crypto protocols reintroduce participatory governance of public systems as a part of daily life.”
            </p>
            <p className="text-left">
              <sup> 5 </sup> As Scott Moore reminded me, responsibility is not about optionality; it is about care.
            </p>
            <p className="text-left"> 
            <sup> 6 </sup>  Daanish Shabbir writes, “The wealth that is earned through control confers control. That control in turn forecloses the possibilities for my flourishing. The wealth that care confers, confers care in return.” As Robin Wall Kimmerer writes, over and over, “All flourishing is mutual.”
            </p>

           <p className="text-left">
            <sup> 7 </sup> 
            The meaning of any word can be described with three interrelated concepts: the signifier, the signified, and the sign. Consider the word ‘dog’. The actual word, d-o-g, written on your screen is the “signifier”. The idealized picture of a four-legged furry creature wagging its tail that is called up in your mind when you read the word is the “signified”. The “sign” is this particular shiba inu in all its singular glory. This works with words for which we all share common experience, like dogs or cats or fancy hats. But what about complex words like dao or buddha or christ? These words certainly signify something, but the violent history of institutionalized religion reveals that it is clearly not shared and that the only way to approach meaningful description in natural language is through negation: “The dao that can be named is not the eternal dao”. What signatures allow for, though, is not only negation, but the possibility of positive response in the sense Viktor Frankl meant in Yes To Life.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
