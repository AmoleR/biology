import React, { Component } from 'react';

class unit2 extends Component {
  constructor() {
    super();
    this.state = {
      show: ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"]
    }
    this.toggleSection = this.toggleSection.bind(this);
  }

  toggleSection (sectionId) {
    let show = this.state.show;
    if (show[sectionId - 1] === "none") {
      show[sectionId - 1] = "inline-block";
    }
    else {
      show[sectionId - 1] = "none";
    }
    this.setState( {show: show} );
  }

  render() {

    return (
      <div className="App">
        <h1 id="heading-1" onClick={() => this.toggleSection("1")}>Background</h1>
        <div id="section-1" style={{display: this.state.show[0]}}>
          There are many types of organic/biomolecules (containing carbon). Normally, there are small pieces, called monomers, that are put together to form larger molecules, known as dimers. There are the four main types:
          <ul>
            <li>Carbohydrates</li>
            <li>Fats</li>
            <li>Proteins</li>
            <li>Nucleic Acids</li>
          </ul>
          <h2>Carbohydrates</h2>
          Carbohydrates are made mainly of the monomers glucose and fructose (yes, there also is galactose). The common ending of -ose is the way to classify a sugar. These are also known as monosaccharides. When we put multiple of these together, we can form polysaccharides. Some examples of these are starch and cellulose (tree bark) and can be found in almost any food we eat.
          <h2>Lipids (and fats)</h2>
          Fats are insoluble, or undisolvable, in water. Some of these are necessary to be taken in through digestion as our body is incapable of producing them. A molecule of fat is normally one molecule of <a href="https://pubchem.ncbi.nlm.nih.gov/compound/glycerol">glycerol</a> connected to three fatty acids. This structure is known as a <b>triglyceride</b>. Saturated fats are solid and only have single bonds while an unsatured fat has double bonds and are liquid:<br />
          <img alt="" src="https://epomedicine.com/wp-content/uploads/2018/07/fatty-acid.gif" /> <br />
          <h2>Proteins</h2>
          Proteins are a key component of the body. They are synthesized from 21 (main) amino acids:<br />
          <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amino_Acids.svg/1280px-Amino_Acids.svg.png" /> <br />
          These proteins come in various forms, and are useful for many body purposes. Not the least, these help with many immune and nerve responses, and also help in hormone formation.
          <h2>Nucleic Acids</h2>
          There are two main forms: DNA (Deoxyribose Nucleic Acid) and RNA (Ribose Nucleic Acid). The main structure for both is the same: phosphate (PO<sub>4</sub>) attached to a sugar attached to a nucleotide. There are 5 nucleosides: adenine, guanine, cytosine, thyamine, and uracil. The first 4 are used for DNA, while thyamine is replaced with uracil for RNA. However, the main difference is the sugar:<br />
          <img alt="" src="https://classconnection.s3.amazonaws.com/308/flashcards/1147308/png/deoxyribose_vs_ribose1330512338251.png" /><br />
          Deoxyribose is used in DNA while ribose is used in RNA. If you look closely, the main difference is one extra oxygen molecule in ribose. Another main difference is that DNA is double helix while RNA is single helix, so they look like this:<br />
          <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Difference_DNA_RNA-EN.svg/1920px-Difference_DNA_RNA-EN.svg.png" />
          <h2>Cell Theory</h2>
          This is actually not a biomolecule, but it is a short section, and I did not want to make an entirely new section for it. Thus, here we are! There are 3 points to cell theory:
          <ul>
            <li>All living things are made of cells</li>
            <li>All cells come from existing cells</li>
            <li>Cells are the fundamental structure and function of living things (i.e. there is nothing more basic)</li>
          </ul>
        </div>
        <h1 id="heading-2" onClick={() => this.toggleSection("2")}>Cell Organization</h1>
        <div id="section-2" style={{display: this.state.show[1]}}>
          There are two main types of cells: prokaryotic and eukaryotic, with differences illustrated in this table:
          <div style={{textAlign: "center"}}>
            <table id="diffenTable" style={{border: "1px solid black", borderCollapse: "collapse"}}>
              <thead>
                <tr>
                  <th class="acol"></th>
                  <th class="vcol" scope="col">Eukaryotic Cell</th>
                  <th class="vcol" scope="col">Prokaryotic Cell</th>
                </tr>
              </thead>
              <tbody>
                <tr class="comparisonRow diff " id="row1">
                  <th class="acol" scope="row">Nucleus</th>
                  <td id="valtd1_1" class="vcol">Present</td>
                  <td id="valtd1_2" class="vcol">Absent</td>
                </tr><tr class="comparisonRow diff " id="row2">
                  <th class="acol" scope="row">Number of chromosomes</th>
                  <td id="valtd2_1" class="vcol">More than one</td>
                  <td id="valtd2_2" class="vcol">One--but not true chromosome: Plasmids</td>
                </tr><tr class="comparisonRow diff " id="row3">
                  <th class="acol" scope="row">Cell Type</th>
                  <td id="valtd3_1" class="vcol">Usually multicellular</td>
                  <td id="valtd3_2" class="vcol">Usually unicellular (some cyanobacteria may be multicellular)</td>
                </tr><tr class="comparisonRow diff " id="row4">
                  <th class="acol" scope="row">True Membrane bound Nucleus</th>
                  <td id="valtd4_1" class="vcol">Present</td>
                  <td id="valtd4_2" class="vcol">Absent</td>
                </tr><tr class="comparisonRow diff " id="row5">
                  <th class="acol" scope="row">Example</th>
                  <td id="valtd5_1" class="vcol">Animals and Plants</td>
                  <td id="valtd5_2" class="vcol">Bacteria and Archaea</td>
                </tr><tr class="comparisonRow diff " id="row6">
                  <th class="acol" scope="row">Genetic Recombination</th>
                  <td id="valtd6_1" class="vcol">Meiosis and fusion of gametes</td>
                  <td id="valtd6_2" class="vcol">Partial, undirectional transfers DNA</td>
                </tr><tr class="comparisonRow diff " id="row7">
                  <th class="acol" scope="row">Lysosomes and peroxisomes</th>
                  <td id="valtd7_1" class="vcol">Present</td>
                  <td id="valtd7_2" class="vcol">Absent</td>
                </tr><tr class="comparisonRow diff " id="row8">
                  <th class="acol" scope="row">Microtubules</th>
                  <td id="valtd8_1" class="vcol">Present</td>
                  <td id="valtd8_2" class="vcol">Absent or rare</td>
                </tr><tr class="comparisonRow diff " id="row9">
                  <th class="acol" scope="row">Endoplasmic reticulum</th>
                  <td id="valtd9_1" class="vcol">Present</td>
                  <td id="valtd9_2" class="vcol">Absent</td>
                </tr><tr class="comparisonRow diff " id="row10">
                  <th class="acol" scope="row">Mitochondria</th>
                  <td id="valtd10_1" class="vcol">Present</td>
                  <td id="valtd10_2" class="vcol">Absent</td>
                </tr><tr class="comparisonRow diff " id="row11">
                  <th class="acol" scope="row">Cytoskeleton</th>
                  <td id="valtd11_1" class="vcol">Present</td>
                  <td id="valtd11_2" class="vcol">May be absent</td>
                </tr><tr class="comparisonRow diff " id="row12">
                  <th class="acol" scope="row">DNA wrapping on proteins.</th>
                  <td id="valtd12_1" class="vcol">Eukaryotes wrap their DNA around proteins called histones.</td>
                  <td id="valtd12_2" class="vcol">Multiple proteins act together to fold and condense prokaryotic DNA. Folded DNA is then organized into a variety of conformations that are supercoiled and wound around tetramers of the HU protein.</td>
                </tr><tr class="comparisonRow diff " id="row13">
                  <th class="acol" scope="row">Ribosomes</th>
                  <td id="valtd13_1" class="vcol">larger</td>
                  <td id="valtd13_2" class="vcol">smaller</td>
                </tr><tr class="comparisonRow same " id="row14">
                  <th class="acol" scope="row">Vesicles</th>
                  <td id="valtd14_1" class="vcol">Present</td>
                  <td id="valtd14_2" class="vcol">Present</td>
                </tr><tr class="comparisonRow diff " id="row15">
                  <th class="acol" scope="row">Golgi apparatus</th>
                  <td id="valtd15_1" class="vcol">Present</td>
                  <td id="valtd15_2" class="vcol">Absent</td>
                </tr><tr class="comparisonRow diff " id="row16">
                  <th class="acol" scope="row">Chloroplasts</th>
                  <td id="valtd16_1" class="vcol">Present (in plants)</td>
                  <td id="valtd16_2" class="vcol">Absent; chlorophyll scattered in the cytoplasm</td>
                </tr><tr class="comparisonRow diff " id="row17">
                  <th class="acol" scope="row">Flagella</th>
                  <td id="valtd17_1" class="vcol">Microscopic in size; membrane bound; usually arranged as nine doublets surrounding two singlets</td>
                  <td id="valtd17_2" class="vcol">Submicroscopic in size, composed of only one fiber</td>
                </tr><tr class="comparisonRow diff " id="row18">
                  <th class="acol" scope="row">Permeability of Nuclear Membrane</th>
                  <td id="valtd18_1" class="vcol">Selective</td>
                  <td id="valtd18_2" class="vcol">not present</td>
                </tr><tr class="comparisonRow diff " id="row19">
                  <th class="acol" scope="row">Plasma membrane with steroid</th>
                  <td id="valtd19_1" class="vcol">Yes</td>
                  <td id="valtd19_2" class="vcol">Usually no</td>
                </tr><tr class="comparisonRow diff " id="row20">
                  <th class="acol" scope="row">Cell wall</th>
                  <td id="valtd20_1" class="vcol">Only in plant cells and fungi (chemically simpler)</td>
                  <td id="valtd20_2" class="vcol">Usually chemically complex</td>
                </tr><tr class="comparisonRow same " id="row21">
                  <th class="acol" scope="row">Vacuoles</th>
                  <td id="valtd21_1" class="vcol">Present</td>
                  <td id="valtd21_2" class="vcol">Present</td>
                </tr><tr class="comparisonRow diff" id="row22">
                  <th class="acol" scope="row">Cell size</th>
                  <td id="valtd22_1" class="vcol">10-100um</td>
                  <td id="valtd22_2" class="vcol">1-10um</td>
                </tr>
              </tbody>
            </table>
          </div>
          But what are they? Well, prokaryotes are any cell that lack a membrane-bound structure. For example, in humans, almost all parts of the cell, including the nucleus and mitochondria, are kept safe by a membrane. However, in bacteria, none of these such membranes exist. Thus bacteria are prokaryotes, while all other organisms are eukaryotes. The structure of the cell can be broken down into multiple parts. Please note that we will be talking about eukaryotic cell parts as these also include prokaryotic cell parts. In addition, if something is not in a prokaryotic cell specifically, it is most likely floating around in the cell, but not as a specific organelle.
          <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Animal_Cell.svg/2560px-Animal_Cell.svg.png" />
          <h2>Nucleolus</h2> (#1 on the diagram of a eukaryotic cell)
          The nucleolus is the core of the DNA and RNA processing. It is responsible for <i>every</i> function of the cell, whether it be moving around or splitting in two parts. The nucleolus is the control center of the entire cell, as if it were the brain. It itself is made of spirally and tightly wounded DNA, RNA, and proteins. Its operation is to create ribosomes, which helps create protein. Most of its operation occurs in its own core, where some DNA (known as rDNA or ribosomal DNA) is processed and where the ribosomes are actually synthesized.
          <h2>Nucleus</h2> (#2 on the diagram of a eukaryotic cell)
          <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/0/06/Blausen_0212_CellNucleus.png" />
          The nucleus is the cell's skull. It's primary function is to house the nucleolus, which processes DNA and RNA (two types of nucleic acid!) The nucleus is very important, and thus is surrounded by a nuclear membrane. It contains all of the DNA (except for a small seemingly irrelevant part). The nucleus has its own <b>nuclear envelope</b> setting it apart from the rest of the cell and its <b>nuclear matrix</b>, which is its backbone. The main structure inside of it is the nucleolus, which takes over 25% of the space in the nucleus! In addition, the nucleus contains pores which allow it to take in and release molecules from the nucleus.
          <h2>Rough Endoplasmic Reticulum (RER)</h2> (#5 on the diagram of a eukaryotic cell)
          <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Nucleus_ER_golgi.svg/1280px-Nucleus_ER_golgi.svg.png" />
          <p style={{fontFamily: "arial"}}>1. Nucleus 2. Nuclear Pore 3. RER 5. Ribosome (The rest are not important for now)</p><br />
          The RER is the manufacturer of the cell. It is where the ribosomes that were made in the nucleolus are finally converted into proteins. The ribosomes bind to the outside of the RER, which gives it its rough appearance and hence name. These ribosomes are "read" by the RER and then they are converted into proteins. Once these proteins are made, the ribosome is released into the outside (cytosol). The RER sits right outside the nucleus so that it can receive the ribosomes from the nucleolus.
          <h2>Golgi Body or Golgi Apparatus</h2> (#6 on the diagram of a eukaryotic cell)
          <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Nucleus_ER_golgi.svg/1280px-Nucleus_ER_golgi.svg.png"  />
          <p style={{fontFamily:"arial"}}>6. Protein 7. Vesicle 8. Golgi Body 9. Cis Golgi 10. Trans Golgi (The rest are not important for now)</p><br />
          The golgi body is the shipping center of the cell. Proteins that were made in the RER are attached to small vesicles (literally a packaging box) and sent off to different parts of the cell. It is normally located in proximity to the RER and nucleus of a cell, although it location does vary. The proteins first pass through the Cis-Golgi Network (CGN) and then the Trans-Golgi Network (TGN). The CGN is the location of where proteins are packaged and the TGN is where they are shipped off to the other organelles.
          <h2>Cytoskeleton</h2> (#7 on the diagram of a eukaryotic cell)
          <img alt="" src="http://4.bp.blogspot.com/-dlr8OPV-Rr0/U75K0rRCiuI/AAAAAAAAAHg/QuaH6GSLxqw/s1600/cytoskeleton.jpg"  />
          The cytoskeleton is the skeleton of the cell. However, like our skeleton, it also aids with movement and transport of materials. The main parts are the microtubules (diameter 25 nm), intermediate filaments (diameter 10 nm), and the microfilaments (diameter 7 nm). The microtubules make up the skeleton of many parts of the cell, and also allow for transport of chemicals. The intermediate filaments are what make sure the cell keeps its original structure and doesn't deflate. The microfilaments are responsible for all cell movement (including the ones in mitosis and meiosis!)
          <h2>Smooth Endoplasmic Reticulum (SER)</h2> (#8 on the diagram of a eukaryotic cell)
          <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Nucleus_ER_golgi.svg/1280px-Nucleus_ER_golgi.svg.png"  />
          <p style={{fontFamily:"arial"}}>4. SER (The rest were discussed above)</p><br />
          While its counterpart the RER synthesizes proteins, this one creates lipids (a type of fat!) This is useful in mainly liver cells, where it is needed to produce molecules for digestion.
          <h2>Mitochondria</h2> (#9 on the diagram of a eukaryotic cell)
          <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mitochondrion_structure.svg/1600px-Mitochondrion_structure.svg.png"  />
          <p style={{fontFamily:"arial"}}>Don't worry about the names. The structure is all I am trying to show.</p>
          The mitochondria is the powerhouse of the cell. However, it is only found in eukaryotic cells. It is the location where the main reactions of cellular respiration occur. The mitochondria has its own DNA (mDNA, but it's not important) that was only recently discovered. It mainly generates ATP, which is what the cell uses from energy, by breaking bonds in other molecules that were put together by the cells.
          <h2>Cytoplasm</h2> (#11 on the diagram of a eukaryotic cell)
          It is the fluid inside of the cell, and is how different organelles can move. In prokaryotes, many of the reactions that would happen in organelles occur in this cytoplasm. It is mainly composed of water, but manages to keep a shape of a matrix in order to divide the areas of a cell. It also allows special molecules that are not transported through the golgi body to be moved to other parts of the cell.
          <h2>Cell Membrane</h2> (#14 on the diagram of a eukaryotic cell)
          <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cell_membrane_detailed_diagram_4.svg/1280px-Cell_membrane_detailed_diagram_4.svg.png"  />
          The cell membrane is what seperates the cell from the outside. It not only provides a structure and a space for the cell to operate in, but it allows for intake of necessary molecules. It allows for the cell to choose how to interact with the neighboring cells, which help the cells around it work together to help the organism.
          <h2>Lysosome</h2>
          A lysosome is almost like a stomach. It is in the sense that it takes in large biomolecules and breaks it down into smaller molecules. These smaller molecules can mainly be used to fortify the cell or to be used in various chemical reactions around the cell.
          <h2>Chloroplast</h2>
          <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Chloroplast_II.svg/700px-Chloroplast_II.svg.png"  />
          The chloroplast is the place is where energy is captured from sunlight and is stored in glucose. It contains a green pigment called chlorophyll, which helps capture sunlight for the cell. These are not fixed inside the cell, and can move around. They have an outer membrane so that the vitals that help produce glucose can be safe.
        </div>
        <h1 id="heading-3" onClick={() => this.toggleSection("3")}>Enzymes and Proteins</h1>
        <div id="section-3" style={{display: this.state.show[2]}}>
          Enzymes are needed to energize chemical reactions as catalysts. Each chemical reaction requires some activation energy:
          <img alt="" src="https://4.bp.blogspot.com/_uzrWbt2ZlyE/TInsf-GBK8I/AAAAAAAAAGQ/nuRopXPltaI/s1600/energy-level-diagram-activation-energy.jpg" /><br />
          Many different types of proteins exist. Some examples are:
          <table>
            <tr>
              <td>
                Collagen<br />
                <img alt="" src="https://osu-wams-blogs-uploads.s3.amazonaws.com/blogs.dir/150/files/2014/05/1bkv_collagen_02.png" />
              </td><td>
                Elastin<br />
                <img alt="" src="https://slideplayer.com/slide/9009253/27/images/3/Elastin%E2%80%99s+Structure.jpg" />
              </td><td>
                Actin<br />
                <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Actin_with_ADP_highlighted.png/677px-Actin_with_ADP_highlighted.png" />
              </td><td>
                Keratin<br />
                <img alt="" src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fitech.dickinson.edu%2Fchemistry%2Fwp-content%2Fuploads%2F2008%2F05%2Fkeratin.JPG&f=1&nofb=1" />
              </td>
            </tr>
          </table>
          These proteins have many properties that help them in their reactions. Collagen is used for strength and flexibility. Actin and myosin are used for muscle expansion and contraction. Keratin is used in our nails. Enzymes will help to make it easier to form such proteins and are often themselves proteins. However, these enzymes are very sensitive:<br />
          <img alt="" src="https://thebiochemunclassified.files.wordpress.com/2014/04/enztemprate.gif" /><br />
          If the temperature is too cold, the enzymes will not be able to help as they do not have enough energy. When it is too hot, it loses its structure (denatured). Thus, we need the optimal temperature, which turns out to be 40°C. Compare this to the human body temperature, wich is 38°C. Similarly, acidity has a similar effect on enzymes:<br />
          <img alt="" src="https://kimberlybiochemist.files.wordpress.com/2013/03/enzphrate.gif" /><br />
          Too acidic or too basic environments tend to denature a protein, causing it to unravel. Thus, a pH of 6 is optimal for enzyme catalyzation. Compare this to an average blood pH of 7.4 in humans.
        </div>
        <h1 id="heading-4" onClick={() => this.toggleSection("4")}>Human Processes</h1>
        <div id="section-4" style={{display: this.state.show[3]}}>
          <h2>Muscle Movement</h2>
          As discussed before, the proteins actin (expansion) and myosin (contraction) are used in this movement. Ribosomes formed in the nucleolus of the cell are transported to the RER, where they are read and with the help of enzymes, create amino acids that form proteins actin and myosin. This energy comes from eating other organisms.
          <h2>Fats in the Body</h2>
          When we eat a fatty food, the body sends the broken down fat to fat cells, which specialize in making triglycerides. The fat is broken down into fatty acids by enzymes, and then attached to glycerol to form the desired fatty acid. These can help give a kickstart to the body when it is low on food.
          <h2>Digestion</h2>
          The class of enzymes called hydrolases break down the large food molecules into smaller molecules that are easier to be used by the cell.
          <h2>Hair, Skin, Nails</h2>
          These few body parts are made of an protein called keratin. These grow outward due to the lack of space inside the body, so the unused keratin forms these outer protective layers.
        </div>
        <h1 id="heading-5" onClick={() => this.toggleSection("5")}>Plant Processes</h1>
        <div id="section-5" style={{display: this.state.show[4]}}>
          <h2>Necessary Materials</h2>
          Plants need a variety of materials. Refer to the following table:
          <div style={{textAlign: "center"}}>
            <table id="diffenTable" style={{border: "1px solid black", borderCollapse: "collapse"}}>
              <tr>
                <th>Material</th>
                <th>Where plant gets it from</th>
                <th>Part of plant that gets it</th>
                <th>Through what process</th>
              </tr><tr>
                <td>Water</td>
                <td>Soil</td>
                <td>Roots</td>
                <td>Osmosis</td>
              </tr><tr>
                <td>Minerals</td>
                <td>Soil</td>
                <td>Roots</td>
                <td>Active Transport</td>
              </tr><tr>
                <td>CO<sub>2</sub></td>
                <td>Air</td>
                <td>Leaf (Stomata)</td>
                <td>Diffusion</td>
              </tr><tr>
                <td>Sunlight</td>
                <td>Sun</td>
                <td>Leaf (Palisade Mesophyll)</td>
                <td>Absorption</td>
              </tr>
            </table>
          </div>
          <h2>Roots</h2>
          Roots take in the water and nutrients.<br />
          <img alt="" src="https://biology-igcse.weebly.com/uploads/1/5/0/7/15070316/5851120_orig.png"  /><br />
          As there are more nutrients inside of the cell than outside, the cell needs to use <b>ATP</b> in <b>active transport</b>. However, as there are more <b>solutes</b> inside the cell, there is less water inside the cell. Thus, by <b>osmosis</b>, water flows into the cell.
          <h2>Leafs</h2>
          <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Leaf_Tissue_Structure.svg/1024px-Leaf_Tissue_Structure.svg.png"  /><br />
          Let's break this picture up. The cuticle of the cell is a protein produced by the epidermis, and is a tough but flexible layer. This helps minimize water loss. Then, there is the epidermis. It translates to "outer skin", and it basically is the layer of plant cell closest to the outside (other than the guard cells). Then, we have the mesophyll. There are two parts: the palisade mesophyll and spongy mesophyll. Each of them have different functions. The palisade does most of the photosynthesis. It is vertically elongated and stacked up against the epidermis in order to absorb as much light as possible. Thus, these cells do most of the photosynthesis. Next is the spongy mesophyll. These have less chloroplasts, and do more cellular respiration. However, its main job is to regulate the gass exchange in the cell. Finally, we have the guard cell. These cells are along the bottom of the leaf and allow the opening and closing of the stoma (plural stomata), which are pores that let in gasses into the leaf. High water pressure in the guard cells means that water wants to move out, so the stoma opens. Low water pressure means there is less water, so the stoma will close.
          <h2>Vascular Transport</h2>
          <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Translocation_from_the_source_to_the_sink_within_the_phloem.svg/2880px-Translocation_from_the_source_to_the_sink_within_the_phloem.svg.png"  /><br />
          There are two main structures in vascular transport: the xylem and phloem. The xylem is for water, while the phloem is for sugars. The xylem allows for transpiration to occur. As more transpiration occurs, more water is lost, but at the same time, more CO<sub>2</sub> can enter the leaf. Thus there is a delicate balance between the amount of water and CO<sub>2</sub> in the leaf. This strongly affects the amount of photosynthesis in the plant.
          <h3>Xylem</h3>
          <img alt="" src="https://www.qsstudy.com/wp-content/uploads/2017/04/adhesion-and-cohesion.jpg"  /><br />
          The xylem uses capillary action to move water up the cell. The <b>cohesion</b> between water molecules allows for the water to move up a small path as the top one moves. The cohesion can be explained by hydrogen bonding. In addition, <b>adhesion</b> to the xylem will allow water to not slip, while transpiration pulls at the top water molecule, pulling the rest of the water molecules through <b>cohesion</b>. Transpiration is increased with more humidity, as there is more water for the plant to let escape.
          <h3>Phloem</h3>
          <img alt="" src="http://bio1520.biology.gatech.edu/wp-content/uploads/2018/04/Figure_30_05_07.jpg"  /><br />
          The phloem consists of special cells called seive tube cells. These cells need energy to have sugar be transported into the cell, against its concentration gradient. Water follows through osmosis, using the argument that we used for the roots. In summer, at glucose (actually sucrose) production peak, the phloem transports sap (sucrose and water) to the base of the cell (roots). In winter, when sucrose production is minimal, the phloem transports sap to the stems of the plants.
        </div>
      </div>
    );
  }
}

export default unit2;
