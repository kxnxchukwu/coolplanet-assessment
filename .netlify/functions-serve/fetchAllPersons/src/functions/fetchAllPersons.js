var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// functions/fetchAllPersons.ts
var fetchAllPersons_exports = {};
__export(fetchAllPersons_exports, {
  handler: () => handler
});

// src/static/user.json
var user_default = [
  { id: 1, avatar: "https://robohash.org/porroenimfugiat.png?size=100x100&set=set1", first_name: "Erroll", last_name: "Pritchard", email: "epritchard0@acquirethisname.com", emailVerified: false, dob: "1982-10-24", company: { name: "Jaloo", department: "Human Resources" }, skills: ["TPNS", "DDIC", "Data Warehousing"] },
  { id: 2, avatar: "https://robohash.org/velrecusandaefuga.png?size=100x100&set=set1", first_name: "Sallie", last_name: "Maddie", email: "smaddie1@amazon.com", emailVerified: true, dob: "1986-12-24", company: { name: "Fivespan", department: "Legal" }, skills: ["HDCAM", "EWSD", "Small Boat Operations"] },
  { id: 3, first_name: "Shaylyn", last_name: "Roslen", email: "sroslen2@unesco.org", emailVerified: true, dob: "1987-05-23", company: { name: "Demimbu", department: "Human Resources" }, skills: ["Rural Marketing", "GPS Units", "SWOT analysis"] },
  { id: 4, avatar: "https://robohash.org/estnonrerum.png?size=100x100&set=set1", first_name: "Thorin", last_name: "Flude", email: "tflude3@mayoclinic.com", emailVerified: true, dob: "1985-09-01", company: { name: "Fadeo", department: "Support" }, skills: ["NVH", "Siding", "Jets"] },
  { id: 5, avatar: "https://robohash.org/temporibusvelquo.png?size=100x100&set=set1", first_name: "Ingamar", last_name: "Singyard", email: "isingyard4@webs.com", emailVerified: true, dob: "1984-09-18", company: { name: "Kimia", department: "Sales" }, skills: ["Krakatoa", "SS7", "Microsoft SQL Server"] },
  { id: 6, avatar: "https://robohash.org/abquidemveritatis.png?size=100x100&set=set1", first_name: "Rod", last_name: "Marl", email: "rmarl5@netvibes.com", emailVerified: false, dob: "1982-06-12", company: { name: "Podcat", department: "Training" }, skills: ["XUL", "DNS Administration", "Occupational Health"] },
  { id: 7, first_name: "Babb", last_name: "Tatum", email: "btatum6@icq.com", emailVerified: false, dob: "1989-03-10", company: { name: "Yodel", department: "Support" }, skills: ["International Economics", "Testing", "Unity3D"] },
  { id: 8, first_name: "Val", last_name: "Clitsome", email: "vclitsome7@archive.org", emailVerified: true, dob: "1985-08-04", company: { name: "Trunyx", department: "Accounting" }, skills: ["CTD", "RTL Verification", "Java RMI"] },
  { id: 9, avatar: "https://robohash.org/nonpossimusnumquam.png?size=100x100&set=set1", first_name: "Raquel", last_name: "Grinnell", email: "rgrinnell8@jugem.jp", emailVerified: true, dob: "1982-08-10", company: { name: "Gabcube", department: "Research and Development" }, skills: ["Conservation Issues", "LCS", "ODC"] },
  { id: 10, avatar: "https://robohash.org/voluptasestvel.png?size=100x100&set=set1", first_name: "Quillan", last_name: "Krysiak", email: "qkrysiak9@hibu.com", emailVerified: false, dob: "1983-07-01", company: { name: "Jetpulse", department: "Accounting" }, skills: ["CCDP", "MPLS-TP", "PWE3"] },
  { id: 11, avatar: "https://robohash.org/etquibusdamdolorum.png?size=100x100&set=set1", first_name: "Lou", last_name: "Pyatt", email: "lpyatta@example.com", emailVerified: true, dob: "1987-02-05", company: { name: "Dabtype", department: "Business Development" }, skills: ["PMP", "Myriad", "Recombinant DNA"] },
  { id: 12, first_name: "Lianna", last_name: "Abdie", email: "labdieb@shop-pro.jp", emailVerified: false, dob: "1983-09-12", company: { name: "Divavu", department: "Business Development" }, skills: ["CSAT", "Style Guides", "Japanese Language Proficiency Test"] },
  { id: 13, first_name: "Hugues", last_name: "Rodnight", email: "hrodnightc@miibeian.gov.cn", emailVerified: true, dob: "1989-11-14", company: { name: "Ooba", department: "Services" }, skills: ["Training Delivery", "Nanotechnology", "Time &amp; Attendance"] },
  { id: 14, first_name: "Worden", last_name: "Harvey", email: "wharveyd@harvard.edu", emailVerified: false, dob: "1983-12-09", company: { name: "Zoovu", department: "Legal" }, skills: ["iPad Development", "RBI", "Store Operations"] },
  { id: 15, first_name: "Salomi", last_name: "Immings", email: "simmingse@moonfruit.com", emailVerified: true, dob: "1986-04-10", company: { name: "Kayveo", department: "Training" }, skills: ["Water Treatment", "Glaucoma", "Business Planning"] },
  { id: 16, first_name: "Patrica", last_name: "Essel", email: "pesself@pagesperso-orange.fr", emailVerified: true, dob: "1984-11-13", company: { name: "Skiba", department: "Research and Development" }, skills: ["GI", "BGP", "21 CFR Part 11"] },
  { id: 17, avatar: "https://robohash.org/nullamollitiaqui.png?size=100x100&set=set1", first_name: "Michele", last_name: "Brockest", email: "mbrockestg@wisc.edu", emailVerified: false, dob: "1981-09-08", company: { name: "Meevee", department: "Business Development" }, skills: ["XLMiner", "Americans with Disabilities Act", "GL"] },
  { id: 18, avatar: "https://robohash.org/exquiahic.png?size=100x100&set=set1", first_name: "Derry", last_name: "Labone", email: "dlaboneh@webs.com", emailVerified: true, dob: "1989-09-15", company: { name: "Twitterbridge", department: "Training" }, skills: ["Duty Drawback", "FSMS", "NT Backup"] },
  { id: 19, first_name: "Gilbertina", last_name: "McNeely", email: "gmcneelyi@sciencedirect.com", emailVerified: true, dob: "1987-02-25", company: { name: "Demimbu", department: "Sales" }, skills: ["Start-up Ventures", "Hazardous Waste Management", "Marketing"] },
  { id: 20, avatar: "https://robohash.org/utquisnecessitatibus.png?size=100x100&set=set1", first_name: "Sissie", last_name: "Sinott", email: "ssinottj@bloomberg.com", emailVerified: true, dob: "1981-03-20", company: { name: "Devshare", department: "Legal" }, skills: ["Clinical Nutrition", "Supply Chain Optimization", "LTO"] },
  { id: 21, avatar: "https://robohash.org/nondictamolestias.png?size=100x100&set=set1", first_name: "Noah", last_name: "January 1st", email: "njanuarystk@microsoft.com", emailVerified: true, dob: "1986-10-09", company: { name: "Jamia", department: "Training" }, skills: ["NVH", "SFI", "LDAP Administration"] },
  { id: 22, first_name: "Sharyl", last_name: "Alaway", email: "salawayl@unblog.fr", emailVerified: true, dob: "1982-02-14", company: { name: "Snaptags", department: "Business Development" }, skills: ["Competitive Analysis", "TPP", "System Architecture"] },
  { id: 23, avatar: "https://robohash.org/etblanditiisquo.png?size=100x100&set=set1", first_name: "Filmore", last_name: "Renforth", email: "frenforthm@theguardian.com", emailVerified: false, dob: "1980-12-27", company: { name: "Ooba", department: "Human Resources" }, skills: ["Transitional Justice", "Logistics Management", "RF Design"] },
  { id: 24, avatar: "https://robohash.org/velitcumvel.png?size=100x100&set=set1", first_name: "Mirna", last_name: "Kalb", email: "mkalbn@mtv.com", emailVerified: false, dob: "1988-10-07", company: { name: "Jabbersphere", department: "Engineering" }, skills: ["TIBCO", "CBOT", "UE"] },
  { id: 25, first_name: "Richie", last_name: "MacRury", email: "rmacruryo@netscape.com", emailVerified: true, dob: "1985-09-24", company: { name: "Kazio", department: "Services" }, skills: ["XACML", "VO", "Structural Dynamics"] },
  { id: 26, avatar: "https://robohash.org/utiustoenim.png?size=100x100&set=set1", first_name: "Adelheid", last_name: "Mountjoy", email: "amountjoyp@tamu.edu", emailVerified: false, dob: "1984-07-28", company: { name: "Babbleset", department: "Accounting" }, skills: ["SGSN", "HLR", "GMI"] },
  { id: 27, avatar: "https://robohash.org/providentquaeratet.png?size=100x100&set=set1", first_name: "Ly", last_name: "Gowrie", email: "lgowrieq@craigslist.org", emailVerified: true, dob: "1985-08-22", company: { name: "Realmix", department: "Accounting" }, skills: ["Justice", "SAP MDM", "iGrafx"] },
  { id: 28, avatar: "https://robohash.org/expeditasunteligendi.png?size=100x100&set=set1", first_name: "Hephzibah", last_name: "Jullian", email: "hjullianr@noaa.gov", emailVerified: true, dob: "1983-12-01", company: { name: "Brainbox", department: "Sales" }, skills: ["Newsletters", "CDS", "European Integration"] },
  { id: 29, avatar: "https://robohash.org/fugiatimpeditvoluptas.png?size=100x100&set=set1", first_name: "Daniel", last_name: "Meddings", email: "dmeddingss@discovery.com", emailVerified: true, dob: "1980-09-07", company: { name: "Zooveo", department: "Legal" }, skills: ["Eggplant", "NGS", "CTM"] },
  { id: 30, avatar: "https://robohash.org/etvoluptatein.png?size=100x100&set=set1", first_name: "Marillin", last_name: "Fowden", email: "mfowdent@arstechnica.com", emailVerified: true, dob: "1985-04-07", company: { name: "Riffwire", department: "Training" }, skills: ["Kosher", "RTU", "PDS Frameworks"] },
  { id: 31, first_name: "Lannie", last_name: "Dominick", email: "ldominicku@microsoft.com", emailVerified: true, dob: "1986-02-02", company: { name: "Yoveo", department: "Sales" }, skills: ["Statistical Data Analysis", "QFD", "EPC"] },
  { id: 32, avatar: "https://robohash.org/ullamitaquemagnam.png?size=100x100&set=set1", first_name: "Tracie", last_name: "Fowley", email: "tfowleyv@istockphoto.com", emailVerified: false, dob: "1986-01-22", company: { name: "Topicstorm", department: "Marketing" }, skills: ["Systems Analysis", "NMT", "HTML"] },
  { id: 33, first_name: "Kordula", last_name: "Roseaman", email: "kroseamanw@wordpress.org", emailVerified: false, dob: "1989-07-15", company: { name: "Geba", department: "Product Management" }, skills: ["EKG", "Overall Wellness", "Staff Development"] },
  { id: 34, first_name: "Filide", last_name: "Divers", email: "fdiversx@opensource.org", emailVerified: false, dob: "1983-10-26", company: { name: "Skippad", department: "Marketing" }, skills: ["Awk", "Kohana", "vBulletin"] },
  { id: 35, avatar: "https://robohash.org/eumdoloresdicta.png?size=100x100&set=set1", first_name: "Gideon", last_name: "McGilroy", email: "gmcgilroyy@disqus.com", emailVerified: true, dob: "1985-10-23", company: { name: "Skyvu", department: "Support" }, skills: ["Title IV", "IA32", "Ocean Freight"] },
  { id: 36, avatar: "https://robohash.org/voluptasasperioresest.png?size=100x100&set=set1", first_name: "Gil", last_name: "Marquiss", email: "gmarquissz@patch.com", emailVerified: false, dob: "1981-04-07", company: { name: "Zazio", department: "Human Resources" }, skills: ["NGP", "Benefits Negotiation", "Private Duty"] },
  { id: 37, avatar: "https://robohash.org/doloremaioressunt.png?size=100x100&set=set1", first_name: "Rodolph", last_name: "Delbergue", email: "rdelbergue10@com.com", emailVerified: true, dob: "1981-01-10", company: { name: "Talane", department: "Marketing" }, skills: ["Big Data", "Vegetables", "CVS"] },
  { id: 38, first_name: "Angel", last_name: "Pucker", email: "apucker11@people.com.cn", emailVerified: false, dob: "1980-07-11", company: { name: "Gigaclub", department: "Legal" }, skills: ["International Shipping", "Aircraft Systems", "User Experience Design"] },
  { id: 39, avatar: "https://robohash.org/cumquevelrepudiandae.png?size=100x100&set=set1", first_name: "Dani", last_name: "Le Page", email: "dlepage12@ameblo.jp", emailVerified: false, dob: "1982-10-04", company: { name: "Eabox", department: "Legal" }, skills: ["UPS Shipping", "iReport", "DNA electrophoresis"] },
  { id: 40, avatar: "https://robohash.org/rerumautassumenda.png?size=100x100&set=set1", first_name: "Stefano", last_name: "Lyon", email: "slyon13@buzzfeed.com", emailVerified: true, dob: "1982-11-07", company: { name: "Jetwire", department: "Marketing" }, skills: ["Classical", "HR Software", "PMP"] },
  { id: 41, first_name: "Aretha", last_name: "Galsworthy", email: "agalsworthy14@narod.ru", emailVerified: false, dob: "1982-03-11", company: { name: "Kanoodle", department: "Human Resources" }, skills: ["Waste Management", "PGW", "JP54"] },
  { id: 42, avatar: "https://robohash.org/quidemaasperiores.png?size=100x100&set=set1", first_name: "Binky", last_name: "Vagg", email: "bvagg15@pen.io", emailVerified: true, dob: "1983-03-14", company: { name: "Meemm", department: "Product Management" }, skills: ["XFS", "Electrical Troubleshooting", "European Studies"] },
  { id: 43, avatar: "https://robohash.org/omnislaborumqui.png?size=100x100&set=set1", first_name: "Marji", last_name: "Marklow", email: "mmarklow16@sohu.com", emailVerified: true, dob: "1983-09-02", company: { name: "Fliptune", department: "Legal" }, skills: ["PFD", "GMI", "Employee Relations"] },
  { id: 44, avatar: "https://robohash.org/accusamusexminima.png?size=100x100&set=set1", first_name: "Lester", last_name: "Hehl", email: "lhehl17@friendfeed.com", emailVerified: false, dob: "1988-08-18", company: { name: "Gigashots", department: "Support" }, skills: ["GFAAS", "Naval Architecture", "European Computer Driving Licence"] },
  { id: 45, avatar: "https://robohash.org/ducimusestillum.png?size=100x100&set=set1", first_name: "Brear", last_name: "Colqueran", email: "bcolqueran18@1und1.de", emailVerified: true, dob: "1985-04-29", company: { name: "Twinder", department: "Accounting" }, skills: ["NFC", "Waxing", "Vulnerability Research"] },
  { id: 46, avatar: "https://robohash.org/autemodiosapiente.png?size=100x100&set=set1", first_name: "Harwell", last_name: "Wellington", email: "hwellington19@cbslocal.com", emailVerified: true, dob: "1980-04-08", company: { name: "Meezzy", department: "Business Development" }, skills: ["Oracle RAC", "MBE", "Blender"] },
  { id: 47, first_name: "Amabel", last_name: "Crowth", email: "acrowth1a@bandcamp.com", emailVerified: true, dob: "1985-12-16", company: { name: "Divanoodle", department: "Training" }, skills: ["DHTML", "Usability Testing", "UV Mapping"] },
  { id: 48, first_name: "Yorgos", last_name: "Slimming", email: "yslimming1b@google.co.uk", emailVerified: true, dob: "1980-11-24", company: { name: "Avamm", department: "Engineering" }, skills: ["AAP", "NFC", "VFX Supervision"] },
  { id: 49, avatar: "https://robohash.org/vitaeutsaepe.png?size=100x100&set=set1", first_name: "Ashton", last_name: "Ivanyushkin", email: "aivanyushkin1c@abc.net.au", emailVerified: false, dob: "1989-11-13", company: { name: "Feedmix", department: "Product Management" }, skills: ["Canon XH-A1", "JSLint", "VTP"] },
  { id: 50, first_name: "Alberto", last_name: "O'Dowd", email: "aodowd1d@nature.com", emailVerified: true, dob: "1983-02-22", company: { name: "Centizu", department: "Support" }, skills: ["Quality Assurance", "Guest Lecturing", "SWIFT Payments"] }
];

// functions/fetchAllPersons.ts
var handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(user_default)
  };
};
module.exports = __toCommonJS(fetchAllPersons_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=fetchAllPersons.js.map
