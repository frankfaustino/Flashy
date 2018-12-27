const Folder = () => (
  <svg
    width="162"
    height="155"
    viewBox="0 0 162 155"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <path
        d="M1.42108547e-14,79.3662109 C1.43974822e-14,36.3492839 1.43974822e-14,13.176671 1.42108547e-14,9.8483724 C1.42108547e-14,4.85592448 3.38134766,2.84217094e-14 9.12060547,2.84217094e-14 C14.8598633,2.84217094e-14 42.722168,2.96450731e-14 53.1489258,2.84217094e-14 C63.5756836,2.84217094e-14 70.471959,18.3896484 84.2324219,18.3896484 C117.82666,18.3896484 144.816406,18.3896484 151.469238,18.3896484 C158.12207,18.3896484 161.060547,23.8085938 161.060547,27.2885742 C161.060547,30.7685547 161.060547,138.720703 161.060547,144.560059 C161.060547,150.399414 155.509766,154.306641 152.1604,154.306641 C148.811035,154.306641 17.1352539,154.306641 10.3580322,154.306641 C3.58081055,154.306641 1.42108547e-14,150.577515 1.42108547e-14,144.560059 C1.44672483e-14,140.548421 1.44672483e-14,118.817139 1.42108547e-14,79.3662109 Z"
        id="path-1"
      />
      <filter
        x="-2.2%"
        y="-2.3%"
        width="104.3%"
        height="104.5%"
        filterUnits="objectBoundingBox"
        id="filter-2"
      >
        <feOffset dy="-7" in="SourceAlpha" result="shadowOffsetInner1" />
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          operator="arithmetic"
          k2="-1"
          k3="1"
          result="shadowInnerInner1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          in="shadowInnerInner1"
        />
      </filter>
    </defs>
    <g id="Deck" fill="none" fillRule="evenodd">
      <g id="Folders">
        <g id="Folder">
          <path
            d="M53,1 C69.9047185,1 83.6284021,1 94.1710506,1 C109.985023,1 111.864075,17.2562831 126.199591,20.4536772 C122.149885,20.4536772 106.347977,20.4536772 78.7938669,20.4536772 L53,1 Z"
            id="Path-2"
            fill="#FF9B00"
          />
          <g id="Path">
            <use fill="#FFC851" xlinkHref="#path-1" />
            <use fill="#000" filter="url(#filter-2)" xlinkHref="#path-1" />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

export default Folder