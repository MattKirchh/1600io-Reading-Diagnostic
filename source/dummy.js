addText(data.content, "Introduction", "h1")
                addText(data.content,
                    "Every students’ situation is unique, but there are frequently common phenomena that contribute to poor performance on the reading section of the SAT. Given the fact that the SAT performs an outstanding job of assessing students’ reading comprehension, most of the phenomena are rooted in comprehension shortcomings of various flavors, along with a few other common causes. The tool that generates this report takes into account these common elements to offer the most likely explanations for the reasons the student indicated were responsible for the selection of incorrect answers on the reading section of the test."
                    )
                addLineBreak(data.content)

                addText(data.content, "Analysis", "h1")
                addText(data.content,
                    "Below is the analysis produced by the 1600.io ReaDiag™ engine based on your responses to the diagnostic questionnaire. For each reason you selected, there will be a section containing the following components:"
                    )
                addLineBreak(data.content)

                addText(data.content, "Reason:", ["h2", "i1"])
                addText(data.content,
                    "This will reiterate the reason that you selected for why you are choosing incorrect answers in the reading section of the SAT.",
                    "i1")
                addLineBreak(data.content)

                addText(data.content, "Cause(s):", ["h2", "i1"])
                addText(data.content,
                    "The most likely cause or causes that underlie your errors will be listed and explained.",
                    "i1")
                addLineBreak(data.content)
                addText(data.content,
                    "For each cause, the following two categories of information will be provided:", "i1")
                addLineBreak(data.content)

                addText(data.content, "Discussion:", ["h3", "i2"])
                addText(data.content, "A brief explanation of the characteristics of the cause.", "i2")
                addLineBreak(data.content)

                addText(data.content, "Recommendation", ["h3", "i2"])
                addText(data.content, "Advice about how you can address the cause of your errors.", "i2")
                addLineBreak(data.content)

                addText(data.content,
                    "Following the reason-specific analysis, there will be a set of more generalized observations and recommendations regarding how to improve in the reading section of the test."
                    )
                addLineBreak(data.content)

                addText(data.content, "Reason-Specific Analysis:", "h2")
                addLineBreak(data.content)
                addText(data.content, "Reason for Choosing Incorrect Answers:", "h3")
                addLineBreak(data.content)

                //TODO: Write algorithm to write causes and reasons
                addAnalysis(data.content, reasonsGroupedByCauses)

                addText(data.content, "General Advice for Reading Section Improvement", "h1")
                addText(data.content,
                    "The SAT does an outstanding job of assessing your academic skills within the scope of the test, and the reading section is no exception. The reading section, just as with the rest of the test, cannot be effectively “gamed” and there are no secret “tricks” for making major gains, because in the end, you cannot escape the test’s exquisite ability to determine your level of reading comprehension skill."
                    )
                addLineBreak(data.content)
                addText(data.content,
                    "You must accept this reality. Once you do, you can move forward with improving the most important skills being assessed, and that means geniunely increasing your reading comprehension. It is indisputable that the people who have the best reading comprehension acquired that ability through reading – lots and lots of reading. Lifelong readers breeze through the reading section of the SAT, because they simply understand exactly what every passage is saying, so answering questions with that complete understanding is extremely easy. As we like to say, it’s an open-book test, so it should be simple to answer all the questions --  as long as you are able to understand the book."
                    )
                addLineBreak(data.content)
                addText(data.content,
                    "Our best advice on the topic of improving reading skill (and speed) follows.")
                addLineBreak(data.content)

                addText(data.content, "Learning to Read through Reading vs. Repeatedly Re-Assessing Yourself",
                    "h2")
                addText(data.content,
                    "There is a pervasive and debilitating misunderstanding regarding the use of practice tests, particularly when it comes to the reading section (though also for writing, to a lesser extent)."
                    )
                addLineBreak(data.content)
                addText(data.content,
                    "Doing lots of math problems of the sort found on the SAT is good practice for doing math problems on the SAT. Each SAT has 58 math problems of every (or nearly every) math topic the test is intended to assess. Therefore, using the math sections of practice tests for practice is efficient. The test problems are serving two distinct purposes well: providing the repetition needed to produce proficiency, and also giving an indication of how well the student is doing overall on the math sections of the test while providing feedback on which topics the student needs to learn more thoroughly."
                    )
                addLineBreak(data.content)
                addText(data.content, [
                    "This is deceptive, because it naturally produces the belief that as a general principle, those two functions are inseparable. But they're not, and, in fact, there can be only a small overlap between them, as in the case of the reading section. By contrast with the math section, ",
                    bold(data.content,
                        "the reading portion of the test doesn't provide significant reading practice,"
                        ),
                    " because it can't: the entire reading section consists of five passages, equivalent in length to perhaps 10 or 15 pages from a book, if that. According to the College Board, the reading section on one test has a total of about 3,250 words; a student could take 20 practice tests (65,000 words) and only have gotten reading practice equivalent to reading one short book such as \"The Catcher in the Rye\" (70,000 words), which is negligible in the scheme of things."
                ])
                addLineBreak(data.content)
                addText(data.content, [
                    "The reading section of the test is just an assessment (as it is intended to be); it is not suitable for reading practice. Of course, it's good practice for learning one's way around the format of the test, and for becoming familiar with the types of questions that can be asked, ",
                    bold(data.content,
                        "but it's essentially worthless when it comes to serving as practice for the underlying skill being tested: reading comprehension."
                        )
                ])
                addLineBreak(data.content)
                addText(data.content, [
                    "I liken it to a sports tryout, which serves as an assessment of the athletes skills. At such a tryout, each athlete performs a set of activities while being observed or measured. They might run a sprint, throw a ball, catch a pass, dribble around cones. They're being assessed, but no one would ever think that going through a bunch of tryouts is an optimal training regimen. For every sprint run in a tryout, an athlete might have run 1,000 sprints during training – and done work with weights, honed technique, and so on. ",
                    bold(data.content,
                        "The tryout is a performance, an assessment, a test--it's not training or practice."
                        )
                ])
                addLineBreak(data.content)
                addText(data.content, [
                    "In the math section, when a student gets a problem wrong, there's an immediate opportunity to acquire the needed skill, and a reasonable probability that the next time a problem pertaining to the same topic is encountered, it will be solved properly. With reading, though a student might understand why a specific question has a different answer than the one they selected, ",
                    bold(data.content,
                        "that experience contributes essentially nothing to enhancing the underlying skill of reading comprehension, which comes from actually reading, not from being tested on reading."
                        )
                ])
                addLineBreak(data.content)
                addText(data.content, [
                    "This stark difference in the practice value of the math and the reading sections on the SAT is at least partially responsible for a lot of confusion, frustration, and depression among students preparing for the SAT. They take math section after math section, and their scores increase. They get faster at what they know, and they learn what they don't. At the same time, they're taking reading section after reading section, and they see little or no improvement. They're engaging in what appears to be exactly the same type of activity, but they’re not seeing similar results. The problem is that ",
                    bold(data.content, "they're mistaking assessment for practice"),
                    " when it comes to the reading section. ", bold(data.content,
                        "To improve in reading--to really improve, not just to optimize the test-taking part of the game--requires practicing reading, not practicing taking the reading section of the SAT."
                        )
                ])
                addLineBreak(data.content)

                addText(data.content, "Activities for improving basic comprehension skills", "h2")
                addText(data.content,
                    "The primary activity that produces gains in reading comprehension – which is the essential skill assessed by the reading section of the SAT – is, unsurprisingly, reading. It is not learning tricks, secrets, test-taking tactics, and the like. The SAT does an extraordinarily good job of figuring out whether you’re good at reading or not, so there is no better way to score well on the test than to actually be good at reading."
                    )
                addLineBreak(data.content)
                addText(data.content,
                    "When we tell students that the best way to improve their reading comprehensions skills (and speed) is through reading, they naturally ask, “what should I read?” As the SAT presents a wide variety of reading passages, the answer is, broadly speaking, read materials of the type, style, age, and subject matter that the test presents to you."
                    )
                addLineBreak(data.content)
                addText(data.content,
                    "For specific recommendations on how to find reading materials that are most effective in producing broad gains in reading comprehension, see the reading materials recommendations section below."
                    )
                addLineBreak(data.content)
                addText(data.content,
                    "Next, students often wonder how much they should read, or when they should read. This is an extremely important question, because having a pile of books or a set of article links won’t help if those materials don’t get read in sufficient quantities (or at all). In our experience, the best plan is for the student to establish a habit of reading at night after going to bed. We’ve observed that no matter how busy a student’s day is, there is typically a period of a half-hour to an hour or so after getting into bed when the student is engaging in relatively mindless phone-based activities – playing games, watching videos, scrolling their favorite social media app or forum, etc. We recommend trading in that time for reading. This is ideal for a number of reasons: It connects the reading period to an event that happens every single day without exception, so no excuses can be made (“I didn’t have time at lunch because I was doing homework”); it’s a quiet, comfortable environment for reading (if you can sleep during it, you can read during it), reading is conducive to falling asleep, so if you don’t read much because you doze off, it means you’re getting more sleep, and that’s generally a very good thing for teenagers, and you don’t have to transport your book so that it’s available wherever you may be when you want to read (though you can certainly do that as well)."
                    )
                addLineBreak(data.content)
                addText(data.content, [
                    "Though simply reading a lot is the primary activity through which reading comprehension and speed are improved, the process of improving comprehension can be considerably aided with guidance. For that, we recommend attending ",
                    buildLink("1600.io Live", "https://1600.io/p/1600-io-live"),
                    " Reading Deep Dives, which are live events where a specific reading passage is read through with running commentary showing how to understand and retain the information being conveyed in order to maximize the ease with which questions about the passage can be answered. These cooperative, interactive demonstrations serve to lead students through the thought processes and principles that are important when reading anything, not just an SAT reading passage; remember, the SAT does a great job of assessing your reading comprehension skills, so acquiring those broad skills is the key."
                ])
                addLineBreak(data.content)

                addText(data.content, "Activities for improving test-specific skills", "h2")
                addText(data.content,
                    "Comprehension is king when it comes to reading; we think that message should be eminently clear at this point. However, you don’t want to sabotage yourself on the test by being oblivious to the form and constraints of the exam, so it is important to familiarize yourself with the structure and timing of the SAT’s reading section, and to gain experience and comfort with the process of sitting for the exam. It’s also vital to perform some self-diagnostics to ascertain specific aspects of reading or question interpretation that are inadequate so that you can address those shortcomings. This is all still part of the larger effort to improve your reading comprehension skills, though it uses the practice tests themselves as assessment materials for this diagnostic process. Here’s the simple procedure that we recommend when starting out, and that can be used occasionally to check progress and ensure that things aren’t slipping through the cracks and going unaddressed:"
                    )
                addLineBreak(data.content)
                addList(data.content, [
                    "Take practice sections untimed to remove timing as a factor. Take all the time you need to read each passage until you feel that you comprehend it as much as you are capable of. The idea here is not to limit your comprehension with a time cutoff, but rather to see what you can’t understand no matter how long you spend trying to do so. Do not guess, even between two choices. Guessing can conceal shortcomings. If you can’t decide between two answers, mark them both.",
                    ["Score the results",
                    buildSubList([
                        "Your scaled (curved) is irrelevant. What matters is simply finding which questions you were unable to answer correctly, because the primary purpose of this activity is to zero in on your areas of difficulty.",
                        "Mark questions that were wrong, that you couldn’t answer at all, or where you could only narrow the choices to two options"
                    ])],
                    "Watch the 1600.io video analysis of each passage or watch the Deep Dive video if available, then watch the explanatory videos for each marked question. This phase is vital, because it is here that you will either rationalize your wrong answers, thus learning nothing, or you will truly understand why you picked an incorrect choice (or no choice at all), why the correct answer is correct, and, just as importantly, why all the incorrect answers are wrong (or less-good than the best answer)."
                ])
                addLineBreak(data.content)
                addText(data.content, "Rebalance reading time and answering time", "h3")
                addText(data.content,
                    "This point is discussed in some of the cause-specific recommendations above, but it bears repeating here. When students find that they are unable to answer all the questions for a passage within the 13 minute average time available, they naturally assume that they therefore need more time to work on the questions, and thus, they  must spend less time reading the passage. This line of reasoning, however, has an underlying fatal flaw: It assumes that amount of time needed to answer the questions doesn’t change, so the only possible way to shorten the whole process is to read the passage more rapidly, even if that means skimming. This is a mistaken belief, because the better your comprehension of the passage, the faster you can answer the questions; among other things, you won’t need to flip back and forth between questions and the passage nearly as often. This is not merely a theoretical supposition; 1600.io has observed large numbers of students answering questions for reading passages after maximizing their comprehension, and our data shows that most students can answer all the questions in less than about half of the 13 minutes available for the passage. This, in turn, means that you can spend 6-7 minutes reading to maximize comprehension, allowing you to use the remaining 6-7 minutes for answering the questions. This will produce a superior outcome, both in terms of time and score, when compared to trying to blaze through the passage in 3 minutes, then spending 10 minutes (or more) trying to answer the questions with only a fragmentary and vague understanding of the passage text."
                    )
                addLineBreak(data.content)

                addText(data.content, "Reading materials sources listing", "h2")
                addText(data.content,
                    "Below you will find resources for reading materials in all the areas assessed by the SAT. It’s important to read a variety of materials from different time periods in order to be a well-rounded reader and therefore to be able to handle anything that will appear on the test."
                    )
                addLineBreak(data.content)
                addList(data.content,
                    [{
                            text: [
                                buildLink("SAT/PSAT/Khan Passage source compilation",
                                    "https://1600.io/courses/tools-and-resources/lectures/12173863"),
                                " in the 1600.io Tools and Resources module.\n\n1600.io has prepared a listing of every literature and history passage that has ever appeared on any released SAT or PSAT, along with those offered on Khan Academy. Each entry in the listing includes the name of the work, the author, the publication date (or presentation date, if a speech or address), and a link to the source from which the passage was excerpted. All of the history texts are available to read at no cost online, and many of the older literature sources can also be read in full. Furthermore, the sites that house this material generally have a huge quantity of similar materials and thus provide a rich vein of additional reading materials that students can mine.\n\n"
                            ]
                        },
                        {
                            text: [
                                "Discord",
                                buildLink("#book-club channel", "https://discord.gg/NJx6E4z"),
                                " (messages and pins) for literature\n\n1600.io maintains a Discord server focused on college readiness as assessed by the SAT. Within our server, there is a #book-club channel where students request and offer recommendations for books, and there are active discussions about books that students have read or are reading. The channel contains curated book lists that are based on submissions from participating students, so there are hundreds of choices of books that will appeal to students. Links to sources for other types of materials are also pinned in that channel.\n\n"
                            ]
                        },
                        {
                            text: [
                                buildLink("Scientific American link for science articles",
                                    "https://www.scientificamerican.com/"),
                                "\n\nScientific American is an excellent source of modern science articles of the type and style of those from which science passages are excerpted on the SAT.\n\n"
                            ]
                        },
                        {
                            text: [
                                buildLink("Smithsonian category link for science articles",
                                    "https://www.smithsonianmag.com/search/?q=&categories=Science"),
                                "\n\nSmithsonian is another excellent source of science articles.\n\n"
                            ]
                        },
                        {
                            text: [
                                buildLink("Smithsonian tag link for social science articles",
                                    "https://www.smithsonianmag.com/tag/social-sciences/"),
                                "\n\nSmithsonian is an outstanding source of social science articles of the type you’d expect to see excerpted on the test."
                            ]
                        }
                    ]
                )
                addLineBreak(data.content)

                addText(data.content, "Conclusion", "h1")
                addText(data.content,
                    "Though this report might be lengthy, we believe that it includes essential information that can help you improve your readiness for college by enhancing your reading comprehension. Because the SAT does such an excellent job of assessing college readiness, if you are able to follow the advice herein and implement the suggestions and procedures we provide, with time, the SAT will reveal your improvements. Patience is essential, because improvements in the reading section are the slowest to come due to the test’s high standards for reading comprehension as is typically acquired through a lifetime of reading activities. We at 1600.io know you will be successful if you apply yourself to making the changes we recommend."
                    )