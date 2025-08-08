import React from 'react';
import { Award, Book, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="prose prose-lg max-w-none prose-invert">
              <p className="text-lg mb-6">
                I am a passionate technologist and innovator with experience
                across multiple domains including AI, web development, IoT, and
                business applications. My mission is to create technology
                solutions that make a meaningful impact on people's lives.
              </p>

              <p className="text-lg mb-6">
                With a background in computer science and engineering, I combine
                technical expertise with creative problem-solving to develop
                innovative projects. I'm particularly interested in the
                intersection of artificial intelligence and real-world
                applications, where technology can enhance human capabilities.
              </p>

              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <GraduationCap className="h-6 w-6 text-teal-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-teal-400">
                      Education
                    </h3>
                    <p className="mt-1">
                      B.Sc(ECS), Sangameshwar College (Autonomous), Solapur
                    </p>
                    <p className="text-gray-400">2021 - 2024</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Briefcase className="h-6 w-6 text-teal-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-teal-400">
                      Experience
                    </h3>
                    <p className="mt-1">
                      Senior Developer at Tech Innovations Inc.
                    </p>
                    <p className="text-gray-400">Present</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Award className="h-6 w-6 text-teal-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-teal-400">
                      Achievements
                    </h3>
                    <p className="mt-1">
                      Published researcher in AI and Machine Learning
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Book className="h-6 w-6 text-teal-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-teal-400">
                      Skills
                    </h3>
                    <p className="mt-1">
                      AI & Machine Learning, Full-Stack Development, IoT,
                      Product Management, Business Strategy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-500 shadow-xl">
              <img
src="src/images/om.jpg"
                alt="Onkar Mahamuni"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-teal-500 opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
