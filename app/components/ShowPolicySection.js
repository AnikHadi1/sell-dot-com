import SectionWarper from "@/app/components/SectionWarper";
import { BsChatRightText } from "react-icons/bs";
import { FaBriefcase, FaEnvelopeOpenText, FaTruckMoving } from "react-icons/fa";

function ShowPolicySection() {
  return (
    <div className="flex gap-4 w-full border border-red-500 justify-between">
      <div className="flex-1 flex items-center gap-3 border border-red-500 ">
        <div>
          <FaTruckMoving />
        </div>
        <div>
          <h1>Cancellation & Returns</h1>
          <p>If products not match</p>
        </div>
      </div>

      <div className="flex-1 flex items-center gap-3">
        <div>
          <FaBriefcase />
        </div>
        <div>
          <h1>Privacy Policy</h1>
          <p>Check before dealing</p>
        </div>
      </div>

      <div className="flex-1 flex items-center gap-3">
        <div>
          <FaEnvelopeOpenText />
        </div>
        <div>
          <h1>EMI Policy</h1>
          <p>We provide 0% EMI facilities*</p>
        </div>
      </div>

      <div className="flex-1 flex items-center gap-3">
        <div>
          <BsChatRightText />
        </div>
        <div>
          <h1>Customer Support</h1>
          <p>Call us at 09636895</p>
        </div>
      </div>
    </div>
  );
}

export default SectionWarper(ShowPolicySection);
