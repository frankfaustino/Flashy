const Logo = ({ height = '144px', width = '138px', rotate }) => (
  <svg
    style={{
      zIndex: 1,
      alignSelf: 'center',
      justifySelf: 'center',
      transform: rotate && 'rotate(-6deg)'
    }}
    width={width}
    height={height}
    viewBox="0 0 138 144"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <rect id="path-1" width="116" height="122" rx="40.25" />
      <filter
        x="-17.2%"
        y="-12.3%"
        width="134.5%"
        height="132.8%"
        filterUnits="objectBoundingBox"
        id="filter-2"
      >
        <feMorphology
          radius="2.5"
          operator="dilate"
          in="SourceAlpha"
          result="shadowSpreadOuter1"
        />
        <feOffset dy="5" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation="4"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <filter
        x="-13.4%"
        y="-8.6%"
        width="126.7%"
        height="125.4%"
        filterUnits="objectBoundingBox"
        id="filter-3"
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
          values="0 0 0 0 0.498039216 0 0 0 0 0.498039216 0 0 0 0 0.498039216 0 0 0 0.25 0"
          in="shadowInnerInner1"
          result="shadowMatrixInner1"
        />
        <feOffset dy="-2" in="SourceAlpha" result="shadowOffsetInner2" />
        <feComposite
          in="shadowOffsetInner2"
          in2="SourceAlpha"
          operator="arithmetic"
          k2="-1"
          k3="1"
          result="shadowInnerInner2"
        />
        <feColorMatrix
          values="0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 1 0"
          in="shadowInnerInner2"
          result="shadowMatrixInner2"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixInner1" />
          <feMergeNode in="shadowMatrixInner2" />
        </feMerge>
      </filter>
    </defs>
    <g id="UI-Ideas" fill="none" fillRule="evenodd">
      <g id="Mascot" transform="translate(11 6)">
        <g id="Rectangle" strokeLinecap="round" strokeLinejoin="round">
          <use fill="#000" filter="url(#filter-2)" xlinkHref="#path-1" />
          <use fill="#FFF" xlinkHref="#path-1" />
          <use fill="#000" filter="url(#filter-3)" xlinkHref="#path-1" />
          <rect
            stroke="#01B54A"
            x="-0.5"
            y="-0.5"
            width="117"
            height="123"
            rx="40.25"
          />
        </g>
        <path
          d="M58,62 C62.9705627,62 67,57.9656155 67,54.7081625 C67,51.4507095 62.7043102,52.0419345 57.7337474,52.0419345 C52.7631847,52.0419345 49,51.4507095 49,54.7081625 C49,57.9656155 53.0294373,62 58,62 Z"
          id="Oval"
          fill="#393939"
        />
        <ellipse id="Oval" fill="#FF523D" cx="58" cy="58.5" rx="4" ry="2.5" />
        <path
          d="M82.0276693,47.0834147 C82.4296875,47.0834147 83,46.0956273 83,45 C83,41.6862915 80.3137085,39 77,39 C73.6862915,39 71,41.6862915 71,45 C71,46.0920065 71.6874231,47.0834147 72.1385905,47.0834147 C73.0772298,47.0834147 73.9286296,45 77.0098947,45.0136069 C80.0911598,45.0272138 80.8387858,47.0834147 82.0276693,47.0834147 Z"
          id="Oval"
          fill="#393939"
        />
        <path
          d="M44.0276693,47.0834147 C44.4296875,47.0834147 45,46.0956273 45,45 C45,41.6862915 42.3137085,39 39,39 C35.6862915,39 33,41.6862915 33,45 C33,46.0920065 33.6874231,47.0834147 34.1385905,47.0834147 C35.0772298,47.0834147 35.9286296,45 39.0098947,45.0136069 C42.0911598,45.0272138 42.8387858,47.0834147 44.0276693,47.0834147 Z"
          id="Oval"
          fill="#393939"
        />
      </g>
    </g>
  </svg>
)

export default Logo
