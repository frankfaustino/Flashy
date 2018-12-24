export default () => (
  <svg width="179" height="178" viewBox="0 0 179 178" xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
          <rect id="path-1" x="32" y="26" width="116" height="122" rx="40.25" />
          <filter x="-17.2%" y="-12.3%" width="134.5%" height="132.8%" filterUnits="objectBoundingBox"
          id="filter-2">
              <feMorphology radius="2.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"
              />
              <feOffset dy="5" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
              <feGaussianBlur stdDeviation="4" in="shadowOffsetOuter1" result="shadowBlurOuter1"
              />
              <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"
              />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" in="shadowBlurOuter1"
              />
          </filter>
          <filter x="-13.4%" y="-8.6%" width="126.7%" height="125.4%" filterUnits="objectBoundingBox"
          id="filter-3">
              <feOffset dy="-7" in="SourceAlpha" result="shadowOffsetInner1" />
              <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic"
              k2="-1" k3="1" result="shadowInnerInner1" />
              <feColorMatrix values="0 0 0 0 0.498039216 0 0 0 0 0.498039216 0 0 0 0 0.498039216 0 0 0 0.25 0"
              in="shadowInnerInner1" result="shadowMatrixInner1" />
              <feOffset dy="-2" in="SourceAlpha" result="shadowOffsetInner2" />
              <feComposite in="shadowOffsetInner2" in2="SourceAlpha" operator="arithmetic"
              k2="-1" k3="1" result="shadowInnerInner2" />
              <feColorMatrix values="0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 0 0.933333333 0 0 0 1 0"
              in="shadowInnerInner2" result="shadowMatrixInner2" />
              <feMerge>
                  <feMergeNode in="shadowMatrixInner1" />
                  <feMergeNode in="shadowMatrixInner2" />
              </feMerge>
          </filter>
      </defs>
      <g id="UI-Ideas" fill="none" fillRule="evenodd">
          <g id="Mascot">
              <rect id="Rectangle" fill="#01B54A" width="179" height="178" rx="62" />
              <g id="Rectangle" strokeLinecap="round" strokeLinejoin="round">
                  <use fill="#000" filter="url(#filter-2)" xlinkHref="#path-1" />
                  <use fill="#FFF" xlinkHref="#path-1" />
                  <use fill="#000" filter="url(#filter-3)" xlinkHref="#path-1" />
                  <rect stroke="#01B54A" x="31.5" y="25.5" width="117" height="123" rx="40.25"
                  />
              </g>
              <path d="M90,88 C94.9705627,88 99,83.9656155 99,80.7081625 C99,77.4507095 94.7043102,78.0419345 89.7337474,78.0419345 C84.7631847,78.0419345 81,77.4507095 81,80.7081625 C81,83.9656155 85.0294373,88 90,88 Z"
              id="Oval" fill="#393939" />
              <ellipse id="Oval" fill="#FF523D" cx="90" cy="84.5" rx="4" ry="2.5" />
              <path d="M114.027669,73.0834147 C114.429688,73.0834147 115,72.0956273 115,71 C115,67.6862915 112.313708,65 109,65 C105.686292,65 103,67.6862915 103,71 C103,72.0920065 103.687423,73.0834147 104.13859,73.0834147 C105.07723,73.0834147 105.92863,71 109.009895,71.0136069 C112.09116,71.0272138 112.838786,73.0834147 114.027669,73.0834147 Z"
              id="Oval" fill="#393939" />
              <path d="M76.0276693,73.0834147 C76.4296875,73.0834147 77,72.0956273 77,71 C77,67.6862915 74.3137085,65 71,65 C67.6862915,65 65,67.6862915 65,71 C65,72.0920065 65.6874231,73.0834147 66.1385905,73.0834147 C67.0772298,73.0834147 67.9286296,71 71.0098947,71.0136069 C74.0911598,71.0272138 74.8387858,73.0834147 76.0276693,73.0834147 Z"
              id="Oval" fill="#393939" />
          </g>
      </g>
  </svg>
)
