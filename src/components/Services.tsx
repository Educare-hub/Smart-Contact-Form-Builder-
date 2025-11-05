import serviceIMG from "../assets/images/services.jpg";

export const Services = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 h-fit p-4 md:p-8">
      {/* Left side image */}
      <div className="w-full md:w-1/2 flex items-center mb-6 md:mb-0">
        <img src={serviceIMG} alt="Smart Contact Form services" className="rounded-xl shadow-lg" />
      </div>

      {/* Right side content */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-cyan-100">
          Our Services
        </h2>

        <p className="mb-4 text-white text-base md:text-lg">
          {/* Your custom message here */}
        </p>

        <div className="overflow-x-auto">
          <table className="table text-white border border-white/30 rounded-lg bg-gradient-to-r from-[#00C6FF]/70 to-[#FF6B6B]/70">
            <thead className="bg-[#00C6FF]/80 text-white">
              <tr>
                <th>#</th>
                <th>Feature</th>
                <th>Function</th>
                <th>Benefit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#FF6B6B]/40">
                <th>1</th>
                <td>Form Customization</td>
                <td>Drag-and-drop builder</td>
                <td>Design forms that match your brand perfectly</td>
              </tr>
              <tr className="hover:bg-[#00C6FF]/40">
                <th>2</th>
                <td>Email Integration</td>
                <td>Instant message delivery via Nodemailer</td>
                <td>Receive contact messages directly in your inbox</td>
              </tr>
              <tr className="hover:bg-[#FF6B6B]/40">
                <th>3</th>
                <td>Submission Dashboard</td>
                <td>Track, view, and manage all form entries</td>
                <td>Stay organized and never miss a client inquiry</td>
              </tr>
              <tr className="hover:bg-[#00C6FF]/40">
                <th>4</th>
                <td>Security & Control</td>
                <td>JWT authentication</td>
                <td>Keep user data secure and private</td>
              </tr>
            </tbody>
          </table>
        </div>

        <button className="btn btn-primary mt-4 self-start shadow-lg hover:scale-105 transition">
          Try It Free
        </button>
      </div>
    </div>
  );
};
